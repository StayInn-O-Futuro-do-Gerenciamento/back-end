import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { tManagerRequest, tManagerReturnWithoutPass } from "../../interfaces";
import { Manager } from "../../entities";
import { managerReturnCreteSchemaWhithoutPass } from "../../schemas";

export const createManagerService = async (
  managerData: tManagerRequest
): Promise<tManagerReturnWithoutPass> => {
  const managerRepository: Repository<Manager> =
    AppDataSource.getRepository(Manager);

  const manager: Manager = managerRepository.create(managerData);

  await managerRepository.save(manager);

  const newManager = managerReturnCreteSchemaWhithoutPass.parse(manager);

  return newManager;
};
