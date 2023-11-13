import { Router } from "express";
import {
  createAttendantController,
  deleteAttendantController,
  updateAttendantController,
  listAttendantByIdController,
} from "../../controllers";
import { validateTokenMiddleware, verifyIdMiddleware } from "../../middlewares";
import { Attendant, Manager } from "../../entities";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";

export const attendantRouter: Router = Router();

attendantRouter.post(
  "",
  validateTokenMiddleware,
  (req, res, next) => {
    const repo: Repository<Manager> = AppDataSource.getRepository(Manager);
    const id = res.locals.userId;
    verifyIdMiddleware<Manager>(req, res, next, repo, id, "Manager");
  },
  createAttendantController
);

attendantRouter.patch(
  "/:id",
  validateTokenMiddleware,
  (req, res, next) => {
    const repo: Repository<Attendant> = AppDataSource.getRepository(Attendant);
    const id = req.params.id;
    verifyIdMiddleware<Attendant>(req, res, next, repo, id, "Attendant");
  },
  updateAttendantController
);
attendantRouter.delete(
  "/:id",
  validateTokenMiddleware,
  (req, res, next) => {
    const repo: Repository<Attendant> = AppDataSource.getRepository(Attendant);
    const id = req.params.id;
    verifyIdMiddleware<Attendant>(req, res, next, repo, id, "Attendant");
  },
  deleteAttendantController
);

attendantRouter.get("/:id", listAttendantByIdController);
