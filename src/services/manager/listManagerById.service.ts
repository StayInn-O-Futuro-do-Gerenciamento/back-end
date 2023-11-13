import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Manager } from "../../entities";
import { AppError } from "../../errors";

export const listManagerByIdService = async (id: string): Promise<any> => {
  const managerRepo: Repository<Manager> = AppDataSource.getRepository(Manager);

  const findManager = await managerRepo.findOne({
    where: {
      id: id,
    },
  });

  if (!findManager) {
    throw new AppError("Manager not found", 404);
  }
  const manager: any = { ...findManager };

  delete manager.password;

  return manager;
};
