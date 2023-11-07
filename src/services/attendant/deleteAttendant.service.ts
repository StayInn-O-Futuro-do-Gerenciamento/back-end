import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Attendant } from "../../entities";
import { AppError } from "../../errors";

export const deleteAttendantService = async (id: string) => {
  const attendantRepository: Repository<Attendant> =
    AppDataSource.getRepository(Attendant);

  const attendant = await attendantRepository.findOne({
    where: { id: id },
  });

  if (!attendant) {
    throw new AppError("Attendant not exist!", 404);
  }

  await attendantRepository.delete({ id: id });
};
