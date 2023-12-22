import express from "express";
import { formularioNuevaVacante, agregarVacante } from "./controller";

const router = express.Router();

router.get("/nueva", formularioNuevaVacante);

router.post('/nueva', agregarVacante)

export default router;
