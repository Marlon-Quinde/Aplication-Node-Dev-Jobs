import { NextFunction, Request, Response } from "express";
import { HomePage } from "../../interfaces/renderPage.interface";
import HomeService from "./service";
import mongoose from "mongoose";
import { Vacantes } from '../../models/Vacantes';

//* Models

const homeService = new HomeService();

export const mostrarTrabajos = async (req: Request, res: Response, next: NextFunction) => {
  const vacantes = await Vacantes.find();
  if(!vacantes) return next();

  const ctx: HomePage = {
    nombrePagina: "debjobs",
    tagline: "Encuentra y publica trabahos para desarrolladores web",
    barra: true,
    boton: true,
    vacantes
  };
  homeService.homeRendePage(res, "home", ctx);
};
