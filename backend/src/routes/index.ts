import { Router } from "express";
import UserRoutes from "./user.routes";
import FileRoutes from "./files.routes";

const router = Router();

router.use("/users", UserRoutes);
router.use("/files", FileRoutes);

export default router;
