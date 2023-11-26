import axios from "axios";
import { response } from "express";
import { AppError } from "../../errors";
import { Repository } from "typeorm";
import { Manager, wppConnect } from "../../entities";
import { AppDataSource } from "../../data-source";

export const wppConnectService = async (
  token: string,
  user: string,
  api_key: string
) => {
  const managerRepository: Repository<Manager> =
    AppDataSource.getRepository(Manager);
  const wppInstanceRepository: Repository<wppConnect> =
    AppDataSource.getRepository(wppConnect);

  const managerFind: Manager | null = await managerRepository.findOne({
    where: {
      id: user,
    },
  });

  const wppAlreadyExists: wppConnect | null =
    await wppInstanceRepository.findOne({
      where: {
        instanceName: user,
      },
    });

  if (wppAlreadyExists) {
    throw new AppError("Instância já existe na DB", 409);
  }

  try {
    const headers = {
      apikey: api_key,
      "Content-Type": "application/json",
    };
    const response = await axios.post(
      `https://api.dietia.com.br/instance/create`,
      {
        instanceName: user,
        token: token,
        qrcode: true,
      },
      {
        headers: headers,
      }
    );
    const qrCode = response.data.qrcode.base64;
    if (managerFind) {
      const instance: wppConnect = wppInstanceRepository.create({
        instanceName: user,
        token: token,
      });
      instance.manager = managerFind;
      await wppInstanceRepository.save(instance);
    }
    return qrCode;
  } catch (error) {
    throw new AppError("Instance já existe", 409);
  }
};
