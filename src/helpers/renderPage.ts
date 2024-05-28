import { Response } from "express";
import { RenderErrorPage, RenderPage } from "../interfaces/renderPage.interface";

export default class RenderPageHelper {
    renderPage(res: Response, ruta: string, ctx: RenderPage) {
        res.render(ruta, { ...ctx });
    }

    renderErrorPage(res: Response, error: string ,ctx: RenderErrorPage ){
        res.render(`errors/${error}`, {...ctx})
    }
}