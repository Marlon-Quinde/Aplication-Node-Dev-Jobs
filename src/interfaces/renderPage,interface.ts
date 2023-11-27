export interface RenderPage {
  nombrePagina: string;
  tagline: string;
}

export interface HomePage extends RenderPage {
  barra?: boolean;
  boton?: boolean;
}

export interface VacantePage extends RenderPage {}
