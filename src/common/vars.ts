import dotenv from "dotenv";
import { IVars } from "../api/models/vars";

dotenv.config();

export const Vars: IVars = {
  PORT:  Number(process.env.PORT),
  MAX_REQ_PER_HOUR: Number(process.env.MAX_REQ_PER_HOUR),
}