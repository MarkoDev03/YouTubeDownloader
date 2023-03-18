import dotenv from "dotenv";
import { IVars } from "../api/models/vars";

dotenv.config();

export const Vars: IVars = {
  PORT:  Number(process.env.PORT),
}