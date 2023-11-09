import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Attendant, Manager } from "../../entities";
import {
  tAttendantReq,
  tAttendantReturnWithoutPass,
  tAttendantReturnWithoutPassManager,
} from "../../interfaces";
import { returnAttendantSchemaWithoutPass } from "../../schemas";

export const createAttendantService = async (
  attendantData: tAttendantReq,
  managerId: string
): Promise<tAttendantReturnWithoutPassManager> => {
  const attendantRepository: Repository<Attendant> =
    AppDataSource.getRepository(Attendant);

  const managerRepository: Repository<Manager> =
    AppDataSource.getRepository(Manager);

  const findManager = await managerRepository.findOne({
    where: {
      id: managerId,
    },
  });

  const newAttendant = attendantRepository.create({
    ...attendantData,
    manager: findManager!,
  });

  await attendantRepository.save(newAttendant);

  const attendant = returnAttendantSchemaWithoutPass.parse(newAttendant);

  return attendant;
};
