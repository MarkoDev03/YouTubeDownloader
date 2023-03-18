import express, { Express } from "express";
import cors from "cors";
import methodOverride from "method-override";
import helmet from "helmet";
import compression from "compression";
import { morganMiddleware } from "../api/middleware/handlers/morgan";
import apiRoutes from "../api/middleware/index";
import { errorHandler } from "../api/middleware/handlers/error-handler";
import { notFoundHandler } from "../api/middleware/handlers/not-found";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(morganMiddleware);
app.use("/api", apiRoutes);
app.use("*", notFoundHandler);
app.use(errorHandler);

export default app;