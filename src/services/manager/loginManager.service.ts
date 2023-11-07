import "dotenv/config";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { tManagerRequest } from "../../interfaces";
import { compare } from "bcryptjs";
import Jwt from "jsonwebtoken";
import { AppError } from "../../errors";
import { Manager } from "../../entities";

export const loginManagerService = async (
  dataLogin: tManagerRequest
): Promise<object> => {
  const { name, password } = dataLogin;

  const managerRepository: Repository<Manager> =
    AppDataSource.getRepository(Manager);

  const manager: Manager | null = await managerRepository.findOneBy({
    name: name,
  });

  if (!manager) {
    throw new AppError("Invalid credentials", 401);
  }

  const matchPassword: boolean = await compare(password, manager.password);

  if (!matchPassword) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = Jwt.sign({}, process.env.SECRET_KEY!, {
    expiresIn: "24h",
    subject: String(manager.id),
  });

  return { token: token };
};
