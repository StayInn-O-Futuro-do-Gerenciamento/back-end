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
  manager: Manager
): Promise<tAttendantReturnWithoutPassManager> => {
  const attendantRepository: Repository<Attendant> =
    AppDataSource.getRepository(Attendant);

  const newAttendant = attendantRepository.create({
    ...attendantData,
    manager: manager,
  });

  await attendantRepository.save(newAttendant);

  const attendant = returnAttendantSchemaWithoutPass.parse(newAttendant);

  return attendant;
};
