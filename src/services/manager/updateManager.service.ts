import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import {
  tManagerReturnWithoutPass,
  tManagerUpdate,
  tManagerUpdateRequest,
} from "../../interfaces";
import { Manager } from "../../entities";
import { managerReturnCreteSchemaWhithoutPass } from "../../schemas";

export const updateManagerService = async (
  managerData: tManagerUpdateRequest,
  managerId: string
): Promise<tManagerReturnWithoutPass> => {
  const managerRepository: Repository<Manager> =
    AppDataSource.getRepository(Manager);

  const { name, password } = managerData;

  const oldData = await managerRepository.findOneBy({
    id: managerId,
  });

  const manager = managerRepository.create({
    password: password || oldData!.password,
    name: name || oldData!.name,
  });

  await managerRepository.save(manager);

  const newManager = managerReturnCreteSchemaWhithoutPass.parse(manager);

  return newManager;
};
