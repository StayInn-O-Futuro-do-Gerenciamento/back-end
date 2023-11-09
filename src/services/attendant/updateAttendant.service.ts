import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Attendant } from "../../entities";
import {
  tAttendantReturnWithoutPass,
  tAttendantUpdateReq,
} from "../../interfaces";
import { returnAttendantSchemaWithoutPass } from "../../schemas";

export const updateAttendantService = async (
  attendantData: tAttendantUpdateReq,
  updateId: string
): Promise<tAttendantReturnWithoutPass> => {
  const attendantRepository: Repository<Attendant> =
    AppDataSource.getRepository(Attendant);

  const oldData = await attendantRepository.findOne({
    where: {
      id: updateId,
    },
    relations: {
      manager: true,
    },
  });

  const attendant = Object.assign(oldData!, attendantData);

  await attendantRepository.save(attendant);

  const newAttendant = returnAttendantSchemaWithoutPass.parse(attendant);

  return newAttendant;
};
