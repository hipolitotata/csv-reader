import request from "supertest";
import path from "path";
import mongoose from "../config/database";
import createServer from "../utils/server";
import UserModel from "../models/User.model";

const app = createServer();

describe("POST /files", () => {
  describe("When a valid CSV file is provided", () => {
    test("Should respond with a 200 status code", async () => {
      // Setup
      const insertManySpy = jest.spyOn(UserModel, "insertMany");
      insertManySpy.mockResolvedValueOnce([
        {
          _id: "64933d285ae8d5c91588321f",
          name: "OTAVIO",
          city: "SÃO PAULO",
          country: "BRASIL",
          favorite_sport: "SOCCER",
          __v: 0,
        },
      ]);

      const rightCsvPath = path.resolve(`${__dirname}/data/right-data.csv`);

      // Perform request
      const response = await request(app)
        .post("/api/files")
        .attach("usersCsv", rightCsvPath);

      // Assertions
      expect(response.statusCode).toBe(200);

      // Cleanup
      insertManySpy.mockRestore();
    });
  });

  describe("When an invalid CSV file is provided", () => {
    test("Should respond with a 400 status code", async () => {
      // Setup
      const wrongCsvPath = path.resolve(`${__dirname}/data/wrong-data.csv`);

      // Perform request
      const response = await request(app)
        .post("/api/files")
        .attach("usersCsv", wrongCsvPath);

      // Assertions
      expect(response.statusCode).toBe(400);
    });
  });

  describe("When no file is provided", () => {
    test("Should respond with a 500 status code", async () => {
      // Perform request
      const response = await request(app).post("/api/files");

      // Assertions
      expect(response.statusCode).toBe(500);
    });
  });
});
