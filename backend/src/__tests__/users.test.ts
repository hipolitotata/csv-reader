import request from "supertest";
import createServer from "../utils/server";
import UserModel from "../models/User.model";

const app = createServer();

describe("GET /users", () => {
  afterEach((done) => {
    jest.clearAllMocks();
    done();
  });

  describe("given list of users in DB without filters", () => {
    test("should respond with a 200 status code", async () => {
      const findSpy = jest.spyOn(UserModel, "find");
      findSpy.mockResolvedValueOnce([
        {
          _id: "64933d285ae8d5c91588321f",
          name: "OTAVIO",
          city: "SÃO PAULO",
          country: "BRASIL",
          favorite_sport: "SOCCER",
          __v: 0,
        },
        {
          _id: "64933d285ae8d5c915883220",
          name: "DANIEL",
          city: "AUCKLAND",
          country: "NEW ZEELAND",
          favorite_sport: "PLAY GAMES",
          __v: 0,
        },
      ]);

      const response = await request(app).get("/api/users");
      expect(response.statusCode).toBe(200);
    });
  });

  describe("given list of users in DB with filter by name", () => {
    test("should respond with a 200 status code", async () => {
      const findSpy = jest.spyOn(UserModel, "find");
      findSpy.mockResolvedValueOnce([
        {
          _id: "64933d285ae8d5c915883220",
          name: "DANIEL",
          city: "AUCKLAND",
          country: "NEW ZEELAND",
          favorite_sport: "PLAY GAMES",
          __v: 0,
        },
      ]);

      const response = await request(app).get("/api/users?name=DANIEL");
      expect(response.statusCode).toBe(200);
    });
  });

  describe("given list of users in DB with filter by city", () => {
    const findSpy = jest.spyOn(UserModel, "find");
    findSpy.mockResolvedValueOnce([
      {
        _id: "64933d285ae8d5c91588321f",
        name: "OTAVIO",
        city: "SÃOPAULO",
        country: "BRASIL",
        favorite_sport: "SOCCER",
        __v: 0,
      },
    ]);

    test("should respond with a 200 status code", async () => {
      const response = await request(app).get("/api/users?city=SÃOPAULO");
      expect(response.statusCode).toBe(200);
    });
  });

  describe("given list of users in DB with filter by inexistent filed", () => {
    test("should respond with a 204 status code", async () => {
      const findSpy = jest.spyOn(UserModel, "find");
      findSpy.mockResolvedValueOnce([]);

      const response = await request(app).get("/api/users?test=test");
      expect(response.statusCode).toBe(204);
    });
  });
});
