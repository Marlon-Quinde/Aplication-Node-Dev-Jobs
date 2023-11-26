import mongoose, { Schema } from "mongoose";
mongoose.Promise = global.Promise;
import slug from "slug";
import { generate } from "shortid";
import { NextFunction } from "express";

interface Vacantes {
  titulo: string;
  empresa: String;
  ubicacion: String;
  salario: String;
  contrato: String;
  url: String;
  skills: String[];
  candidatos: Canditos[];
}

interface Canditos {
  nombre: String;
  email: String;
  cv: String;
}

const vacantesSchema = new Schema<Vacantes>({
  titulo: {
    type: String,
    required: true,
    requiredPaths: "El nombre de la vacante es obligatorio",
    trim: true,
  },
  empresa: { type: String, trim: true },
  ubicacion: {
    type: String,
    trim: true,
    required: true,
    requiredPaths: "La Ubicación es obligatoria",
  },
  salario: {
    type: String,
    trim: true,
    default: 0,
  },
  contrato: {
    type: String,
    trim: true,
  },
  url: {
    type: String,
    lowercase: true,
  },
  skills: [String],
  candidatos: [
    {
      nombre: String,
      email: String,
      cv: String,
    },
  ],
});
vacantesSchema.pre("save", function (next) {
  // ? Crear url

  const url = slug(this.titulo);
  this.url = `${url}-${generate()}`;

  next();
});

const Vacante = mongoose.model("Vacante", vacantesSchema);

export default Vacante;
