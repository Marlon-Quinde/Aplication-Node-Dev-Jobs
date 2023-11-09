import express, { Request, Response } from "express";
import { mostrarTrabajos } from "./controller";

const router = express.Router();

router.get("/", mostrarTrabajos);

export default router;
