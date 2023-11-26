import { AppDataSource } from "../../data-source";
import { wppConnect } from "../../entities";

export const WppListService = async (userId: string) => {
  const wppInstanceRepo = AppDataSource.getRepository(wppConnect);

  const wppList = await wppInstanceRepo.findOne({
    where: {
      instanceName: userId,
    },
  });

  return wppList;
};
