import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Manager } from "../manager/manager.entity";
import { Room } from "../room/room.entity";

@Entity("hotel")
export class Hotel {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "int" })
  numberRoomsTotal: number;

  @Column({ type: "int" })
  numberFloorsTotal: number;

  @Column({ type: "varchar" })
  street: string;

  @Column({ type: "varchar" })
  number: string;

  @Column({ type: "varchar" })
  zipCode: string;

  @Column({ type: "varchar" })
  city: string;

  @OneToOne(() => Manager, (manager) => manager.hotel)
  @JoinColumn()
  manager: Manager;

  @OneToMany(() => Room, (room) => room.hotel)
  rooms: Room[];
}
