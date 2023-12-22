import Vacante from '../../models/Vacantes'

import { Request, Response } from "express";
import { VacantePage } from "../../interfaces/renderPage,interface";

export const formularioNuevaVacante = (req: Request, res: Response) => {
  const ctx: VacantePage = {
    nombrePagina: "Nueva Vacante",
    tagline: "Llena el formulario y publica tu vacante",
  };
  res.render("nueva-vacante", ctx);
};

//* Agregar Vacante a la base de datos
export const agregarVacante = (req: Request, res: Response) => {
  const vacante = new Vacante()
}