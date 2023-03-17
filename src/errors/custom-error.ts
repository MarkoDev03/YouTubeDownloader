import { IErrorModel } from "../api/models/error-model";

export abstract class CustomError extends Error {
  status: number;

  constructor(message: string) {
    super(message);
  }

  serializeError(): IErrorModel[] {
    return [{
      message: this.message,
      status: this.status
    }]
  }
}