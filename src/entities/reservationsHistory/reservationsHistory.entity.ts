import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { array, nullable } from "zod";
import { Reservations } from "../reservations/reservations.entity";

@Entity()
export class ReservationsHistory {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "date" })
  checkin: Date;

  @Column({ type: "date" })
  checkout: Date;

  @Column()
  id_guest: string;

  @Column()
  id_room: string;

  @Column()
  id_reservation: string;
}
