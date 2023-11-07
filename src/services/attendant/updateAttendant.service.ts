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

  const oldData = await attendantRepository.findOneBy({
    id: updateId,
  });

  const attendant = attendantRepository.create({
    name: attendantData.name || oldData!.name,
    password: attendantData.password || oldData!.password,
  });

  await attendantRepository.save(attendant);

  const newAttendant = returnAttendantSchemaWithoutPass.parse(attendant);

  return newAttendant;
};
