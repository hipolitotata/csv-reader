import { Router } from "express";
import multer from "multer";
import * as FilesController from "../controllers/files.controller";
const upload = multer({ dest: "uploads/" });

const FileRoutes = Router();

FileRoutes.post("/", upload.single("usersCsv"), FilesController.readCsv);

export default FileRoutes;
