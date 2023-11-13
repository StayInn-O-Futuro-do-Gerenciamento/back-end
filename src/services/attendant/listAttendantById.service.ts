import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Attendant } from "../../entities";
import { AppError } from "../../errors";

export const listAttendantByIdService = async (id: string): Promise<any> => {
  const attendantRepo: Repository<Attendant> =
    AppDataSource.getRepository(Attendant);

  const findAttendat = await attendantRepo.findOne({
    where: {
      id: id,
    },
  });

  if (!findAttendat) {
    throw new AppError("Attendant not found", 404);
  }

  const attendant: any = { ...findAttendat };

  delete attendant.password;

  return attendant;
};
