import { Response, Request, NextFunction } from "express";
import Logger from "../../../core/logger";
import { CustomError } from "../../../errors/custom-error";
import { Constants } from "../../../common/constants";

export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction): void => {
  Logger.error(error);

  if (error instanceof (CustomError)) {
    var formetedError = error as CustomError;

    res.status(formetedError.status).json({ errors: formetedError.serializeError() });

    return next();
  }

  res.status(500).json({ errors: [{ status: 500, message: Constants.InternalServerError }] });

  return next();
}