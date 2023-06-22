import { Request, Response } from "express";
import csv from "csvtojson";
import path from "path";
import fs from "fs";
import { UsersSchema } from "../validators/user";
import UserModel from "../models/User.model";

export async function readCsv(req: Request, res: Response) {
  if (req?.file?.path) {
    const pathToFile = path.resolve(`./${req.file.path}`);

    try {
      const jsonObject = await csv().fromFile(pathToFile);
      const validation = UsersSchema.validate(jsonObject);

      if (validation?.error) {
        return res.status(400).send({
          message: "The CSV file uplodaded is not in the right schema",
          error: validation?.error?.message,
        });
      }

      const createdUsers = await UserModel.insertMany(validation.value);
      res.status(200).send(createdUsers);
    } catch (err) {
      res.status(500).send({ message: "Sorry, Some error in our server" });
    } finally {
      fs.unlink(pathToFile, (err) => {
        if (err) {
          console.log("Error while delete CSV file");
        }
      });
    }
  } else {
    res.status(500).send({ message: "You need send a CSV file as payload" });
  }
}
