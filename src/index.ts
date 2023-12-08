// ? ORM de mongo
import mongoose from "mongoose";
require("./config/db");
import express, { Request, Response } from "express";
import { engine } from "express-handlebars";
import cookieParser from "cookie-parser";
import session from "express-session";
import MongoStore from "connect-mongo";

import path from "path";
// ? Rutas
import homeRoutes from "./modules/home/routes";
import vacantesRoutes from "./modules/vacantes/routes";
import { DATABASE, PORT, SECRETO } from "./environments";

const app = express();

//? Habilitar Handlebars como view
app.engine(
  "handlebars",
  engine({
    defaultLayout: "layout",
    helpers: require("./helpers/handlebars.ts"),
  })
);
const viewsPath = path.join(__dirname, "views");

app.set("view engine", "handlebars");
app.set("views", viewsPath);

//? Static Files
app.use(express.static("public"));

app.use(cookieParser());
app.use(
  session({
    secret: SECRETO!,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: DATABASE,
    }),
  })
);

app.use("/", homeRoutes);
app.use("/vacantes", vacantesRoutes);

const port = PORT;
console.log(port);
app.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});
