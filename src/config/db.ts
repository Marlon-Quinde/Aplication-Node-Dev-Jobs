import mongoose from "mongoose";
import { DATABASE } from "../environments";
import Vacante from "../models/Vacantes";

mongoose.connect(DATABASE!);

mongoose.connection.on("error", (error) => {
  console.log(error);
});

// Importar modelos
Vacante;
