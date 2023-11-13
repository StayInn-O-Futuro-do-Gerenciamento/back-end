import "dotenv/config";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { tAttendantReqLogin } from "../../interfaces";
import { compare } from "bcryptjs";
import Jwt from "jsonwebtoken";
import { AppError } from "../../errors";
import { Attendant, Manager } from "../../entities";

export const loginService = async (
  dataLogin: tAttendantReqLogin
): Promise<any> => {
  const { name, password } = dataLogin;

  const attendantRepository: Repository<Attendant> =
    AppDataSource.getRepository(Attendant);
  const managerRepository: Repository<Manager> =
    AppDataSource.getRepository(Manager);

  const attendant: Attendant | null = await attendantRepository.findOneBy({
    name: name,
  });
  if (attendant) {
    const matchPassword: boolean = await compare(password, attendant.password);

    if (!matchPassword) {
      throw new AppError("Invalid credentials", 401);
    }

    const token: string = Jwt.sign(
      {
        type: attendant.type,
      },
      process.env.SECRET_KEY!,
      {
        expiresIn: "8h",
        subject: attendant.id,
      }
    );

    return { token: token, type: attendant.type };
  }
  const manager: Manager | null = await managerRepository.findOneBy({
    name: name,
  });

  if (manager) {
    const matchPassword: boolean = await compare(password, manager.password);

    if (!matchPassword) {
      throw new AppError("Invalid credentials", 401);
    }

    const token: string = Jwt.sign(
      {
        type: manager.type,
      },
      process.env.SECRET_KEY!,
      {
        expiresIn: "8h",
        subject: manager.id,
      }
    );

    return { token: token, type: manager.type };
  }

  if (!attendant || !manager) {
    throw new AppError("Invalid credentials", 401);
  }
};
