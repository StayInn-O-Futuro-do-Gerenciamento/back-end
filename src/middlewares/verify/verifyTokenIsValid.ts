import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errors";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../../data-source";
import { Manager } from "../../entities";
import { managerReturnCreteSchema } from "../../schemas";

export const validateTokenMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  let token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    throw new AppError("Mussing Bearer Token", 401);
  }

  jwt.verify(token, String(process.env.SECRET_KEY), (error, decoded: any) => {
    if (error) {
      throw new AppError(error.message, 401);
    }
    res.locals.userId = decoded.sub;
    res.locals.type = decoded.type;
  });

  return next();
};
