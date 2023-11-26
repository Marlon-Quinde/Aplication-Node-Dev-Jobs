import { config } from "dotenv";
config();

export const PORT = process.env.PORT;
export const NODE_ENV = process.env.NODE_ENV;
export const DATABASE = process.env.DATABASE;
export const SECRETO = process.env.SECRETO;
export const KEY = process.env.KEY;
