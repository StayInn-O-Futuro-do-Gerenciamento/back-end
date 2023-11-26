import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Manager } from "../manager/manager.entity";

@Entity("wppConnect")
export class wppConnect {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar" })
  instanceName: string;

  @Column({ type: "varchar" })
  token: string;

  @OneToOne(() => Manager, (manager) => manager.wpp)
  @JoinColumn()
  manager: Manager;
}
