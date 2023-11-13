import { Response } from "express";
import { HomePage } from "../../interfaces/renderPage,interface";

export default class HomeService {
  homeRendePage(res: Response, ruta: string, ctx: HomePage) {
    return res.render(ruta, { ...ctx });
  }
}
