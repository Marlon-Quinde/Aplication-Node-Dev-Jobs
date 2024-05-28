import { VacanteModel } from "../models/Vacantes";

export interface RenderPage {
  nombrePagina: string;
  barra?: boolean;
  tagline?: string;
}

export interface HomePage extends RenderPage {
  boton?: boolean;
  vacantes?: VacanteModel[]
}

export interface VacantePage extends RenderPage {
  vacante?: VacanteModel
}

export interface RenderErrorPage extends Partial<RenderPage> {
  errorPage: boolean,
  nombrePagina: string;
}