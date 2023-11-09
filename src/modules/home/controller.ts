import { Request, Response } from "express";

export const mostrarTrabajos = (req: Request, res: Response) => {
  res.render("home", {
    nombrePagine: "debjobs",
    tagLine: "Encuentra y publica trabahos para desarrolladores web",
    barra: true,
    boton: true,
  });
};
