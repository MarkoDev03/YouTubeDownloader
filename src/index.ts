import { createServer } from "http";
import app from "./core/express";
import { Vars } from "./common/vars";
import Logger from "./core/logger";
import { Constants } from "./common/constants";

const server = createServer(app);
const port = Vars.PORT || 5000;

server.listen(port, () => {
   Logger.info(Constants.ServerIsListening + port);
});