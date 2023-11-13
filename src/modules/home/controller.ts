import { Request, Response } from "express";
import { HomePage } from "../../interfaces/renderPage,interface";
import HomeService from "./service";

const homeService = new HomeService();

export const mostrarTrabajos = (req: Request, res: Response) => {
  const ctx: HomePage = {
    nombrePagina: "debjobs",
    tagline: "Encuentra y publica trabahos para desarrolladores web",
    barra: true,
    boton: true,
  };
  homeService.homeRendePage(res, "home", ctx);
};
