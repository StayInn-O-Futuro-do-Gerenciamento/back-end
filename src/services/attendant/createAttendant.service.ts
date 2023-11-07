import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Attendant, Manager } from "../../entities";
import { tAttendantReq, tAttendantReturnWithoutPass } from "../../interfaces";
import { returnAttendantSchemaWithoutPass } from "../../schemas";

export const createAttendantService = async (
  attendantData: tAttendantReq
): Promise<tAttendantReturnWithoutPass> => {
  const attendantRepository: Repository<Attendant> =
    AppDataSource.getRepository(Attendant);

  const managerRepository: Repository<Manager> =
    AppDataSource.getRepository(Manager);

  const { idManager: managerId, ...attendantRequest } = attendantData;

  const findManager = await managerRepository.findOne({
    where: {
      id: managerId,
    },
  });

  const newAttendant = attendantRepository.create({
    ...attendantRequest,
    manager: findManager!,
  });

  await attendantRepository.save(newAttendant);

  console.log(newAttendant);

  const attendant = returnAttendantSchemaWithoutPass.parse(newAttendant);
  console.log(attendant);
  return attendant;
};
