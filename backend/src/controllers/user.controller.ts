import { Request, Response } from "express";
import UserModel from "../models/User.model";

export async function getUsers(req: Request, res: Response) {
  try {
    let query: any = {};

    if (req.query) {
      for (let key in req.query) {
        req.query[key] !== ""
          ? (query[key] = req.query[key]?.toString().toUpperCase())
          : null;
      }
    }

    const users = await UserModel.find(query);

    if (!users || users?.length === 0) {
      return res.status(204).send([]);
    }

    res.status(200).send(users);
  } catch (err) {
    res.status(500).send({ message: "Sorry, we had problems on our server" });
  }
}
