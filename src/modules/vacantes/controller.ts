import { NextFunction, Request, Response } from "express";
import { VacantePage } from "../../interfaces/renderPage.interface";
import { VacanteModel, Vacantes } from "../../models/Vacantes";
import RenderPage from "../../helpers/renderPage";

const renderPage = new RenderPage();

export const formularioNuevaVacante = (req: Request, res: Response) => {
  const ctx: VacantePage = {
    nombrePagina: "Nueva Vacante",
    tagline: "Llena el formulario y publica tu vacante",
  };
  renderPage.renderPage(res, "nueva-vacante", ctx);
};

//* Agregar Vacante a la base de datos
export const agregarVacante = async (req: Request, res: Response) => {
  const vacante = new Vacantes(req.body);

  // crear arreglo de habilidades (skills)
  vacante.skills = ((req.body as VacanteModel).skills as string).split(",");

  const nuevaVacante = await vacante.save();

  res.redirect(`/vacantes/${nuevaVacante.url}`);
};

export const mostrarVacante = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const url = req.params.url;
  if (!url)
    return renderPage.renderErrorPage(res, "404", {
      errorPage: true,
      nombrePagina: "No existe URL",
    });
  const vacante = await Vacantes.findOne({ url });
  if (!vacante)
    return renderPage.renderErrorPage(res, "404", {
      errorPage: true,
      nombrePagina: "No encontrado",
    });

  const ctx: VacantePage = {
    nombrePagina: vacante.titulo,
    barra: true,
    vacante,
  };
  renderPage.renderPage(res, "vacante", ctx);
};
