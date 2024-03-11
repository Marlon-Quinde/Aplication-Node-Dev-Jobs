import { VacanteModel } from "../models/Vacantes";

export interface RenderPage {
  nombrePagina: string;
  tagline: string;
}

export interface HomePage extends RenderPage {
  barra?: boolean;
  boton?: boolean;
  vacantes?: VacanteModel[]
}

export interface VacantePage extends RenderPage {}
