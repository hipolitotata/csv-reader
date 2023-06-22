import { Router } from "express";
import * as UserController from "../controllers/user.controller";

const UserRoutes = Router();

UserRoutes.get("/", UserController.getUsers);

export default UserRoutes;
