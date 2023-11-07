import "dotenv/config";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { tAttendantReqLogin } from "../../interfaces";
import { compare } from "bcryptjs";
import Jwt from "jsonwebtoken";
import { AppError } from "../../errors";
import { Attendant } from "../../entities";

export const loginAttendantService = async (
  dataLogin: tAttendantReqLogin
): Promise<object> => {
  const { name, password } = dataLogin;

  const attendantRepository: Repository<Attendant> =
    AppDataSource.getRepository(Attendant);

  const attendant: Attendant | null = await attendantRepository.findOneBy({
    name: name,
  });
  console.log(attendant);

  if (!attendant) {
    throw new AppError("Invalid credentials", 401);
  }

  const matchPassword: boolean = await compare(password, attendant.password);

  if (!matchPassword) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = Jwt.sign({}, process.env.SECRET_KEY!, {
    expiresIn: "24h",
    subject: String(attendant.id),
  });

  return { token: token };
};
