import { getTasks } from "../controllers/tasks.controller";
import express from "express";

const router = express.Router();

router.get("/", getTasks);

export default router;
