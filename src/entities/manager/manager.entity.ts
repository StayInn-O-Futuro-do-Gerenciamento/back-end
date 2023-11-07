import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Attendant } from "../attendant/attendant.entity";
import { Hotel } from "../hotel/hotel.entity";

@Entity("manager")
export class Manager {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 50 })
  name: string;

  @Column({ type: "varchar", length: 20 })
  password: string;

  @Column({ type: "varchar", default: "Manager" })
  type: string;

  @OneToOne(() => Hotel, (hotel) => hotel.manager)
  hotel: Hotel;

  @OneToMany(() => Attendant, (attendant) => attendant.manager)
  attendants: Attendant[];
}
