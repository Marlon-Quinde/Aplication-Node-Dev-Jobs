import express from "express";
import { formularioNuevaVacante, agregarVacante, mostrarVacante } from "./controller";

const router = express.Router();

router.get("/nueva", formularioNuevaVacante);

router.post('/nueva', agregarVacante)

// ? Mostrar Vacante (singular)
router.get('/:url', mostrarVacante)

export default router;
