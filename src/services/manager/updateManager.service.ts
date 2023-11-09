import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import {
  tManagerReturnWithoutPass,
  tManagerUpdateRequest,
} from "../../interfaces";
import { Manager } from "../../entities";
import { managerReturnCreteSchemaWhithoutPass } from "../../schemas";
import { AppError } from "../../errors";

export const updateManagerService = async (
  managerData: tManagerUpdateRequest,
  managerId: string
): Promise<tManagerReturnWithoutPass> => {
  const managerRepository: Repository<Manager> =
    AppDataSource.getRepository(Manager);

  const { name, password } = managerData;

  const oldData = await managerRepository.findOne({
    where: {
      id: managerId,
    },
  });

  if (!oldData) {
    throw new AppError("manager not found", 404);
  }

  Object.assign(oldData, managerData);

  await managerRepository.save(oldData);

  const newManager = managerReturnCreteSchemaWhithoutPass.parse(oldData);

  return newManager;
};
