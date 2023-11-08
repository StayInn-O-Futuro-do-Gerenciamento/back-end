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

  // if (!managerId) {
  //   throw new AppError("manager not found", 404);
  // }
  const oldData = await managerRepository.findOne({
    where: {
      id: managerId,
    },
  });

  console.log(oldData);

  if (!oldData) {
    throw new AppError("manager not found", 404);
  }

  const manager = managerRepository.create({
    ...oldData,
    password: password || oldData!.password,
    name: name || oldData!.name,
  });

  await managerRepository.save(manager);

  const newManager = managerReturnCreteSchemaWhithoutPass.parse(manager);

  return newManager;
};
