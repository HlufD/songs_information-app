import { validationResult } from "express-validator";
import { CustomError } from "../utils/customError.js";
import { StatusCodes } from "http-status-codes";
export const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const message = errors.errors.map((err) => err.msg + "_");
        throw new CustomError(message, StatusCodes.UNPROCESSABLE_ENTITY);
      }
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};
