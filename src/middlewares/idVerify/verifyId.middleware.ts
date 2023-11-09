import { Request, Response, NextFunction } from "express";
import { Repository, EntityTarget, ObjectLiteral } from "typeorm";
import { AppError } from "../../errors";

export const verifyIdMiddleware = async <T extends ObjectLiteral>(
  req: Request,
  res: Response,
  next: NextFunction,
  repo: Repository<T>,
  id: string,
  name: String
): Promise<void> => {
  const find = await repo.findOne({
    where: {
      id: id as unknown as NonNullable<T["id"]>,
    },
  });

  if (find == null) {
    res.status(404).json({ message: `${name} not found` });
  } else {
    res.locals.name = find;

    return next();
  }
};
