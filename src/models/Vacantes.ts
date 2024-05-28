import mongoose, { Schema } from "mongoose";
mongoose.Promise = global.Promise;
import slug from "slug";
import { generate } from "shortid";
import { NextFunction } from "express";

export interface VacanteModel {
  titulo: string ;
  empresa: string ;
  ubicacion: string ;
  salario: string ;
  contrato: string;
  url: string ;
  skills: string | string[];
  descripcion: string;
  candidatos: Canditos[];
}

interface Canditos {
  nombre: string ;
  email: string ;
  cv: string ;
}

const vacantesSchema = new Schema<VacanteModel>({
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
    default: '0',
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
  descripcion: {
    type: String,
    trim: true,
  },
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

export const Vacantes = mongoose.model("Vacante", vacantesSchema);

