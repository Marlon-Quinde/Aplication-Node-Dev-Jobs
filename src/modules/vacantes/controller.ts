import { Request, Response } from "express";
import { VacantePage } from "../../interfaces/renderPage.interface";
import { VacanteModel, Vacantes } from "../../models/Vacantes";
export const formularioNuevaVacante = (req: Request, res: Response) => {
  const ctx: VacantePage = {
    nombrePagina: "Nueva Vacante",
    tagline: "Llena el formulario y publica tu vacante",
  };
  res.render("nueva-vacante", ctx);
};

//* Agregar Vacante a la base de datos
export const agregarVacante = async (req: Request, res: Response) => {
  const vacante = new Vacantes(req.body)
  
  // crear arreglo de habilidades (skills)
  vacante.skills = ((req.body as VacanteModel).skills as string).split(',')

  const nuevaVacante = await vacante.save()

  res.redirect(`/vacante/${nuevaVacante.url}`)
  
}