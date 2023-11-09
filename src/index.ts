import express, { Request, Response } from "express";
import { engine } from "express-handlebars";
import path from "path";
// ? Rutas
import homeRoutes from "./modules/home/routes";

const app = express();

//? Habilitar Handlebars como view
app.engine(
  "handlebars",
  engine({
    defaultLayout: "layout",
  })
);
const viewsPath = path.join(__dirname, "views");

app.set("view engine", "handlebars");
app.set("views", viewsPath);

//? Static Files
app.use(express.static("public"));
app.use("/", homeRoutes);

const port = 5000;
app.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});
