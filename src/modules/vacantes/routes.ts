import express from "express";
import { formularioNuevaVacante } from "./controller";

const router = express.Router();

router.get("/nueva", formularioNuevaVacante);

export default router;
