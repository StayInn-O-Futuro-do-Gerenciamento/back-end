import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Manager } from "../../entities";
import { AppError } from "../../errors";

export const deleteManagerService = async (id: string) => {
  const managerRepository: Repository<Manager> =
    AppDataSource.getRepository(Manager);

  const managerId = await managerRepository.findOne({
    where: { id: id },
  });

  if (!managerId) {
    throw new AppError("Manager not exist!", 404);
  }

  await managerRepository.delete({ id: id });
};
