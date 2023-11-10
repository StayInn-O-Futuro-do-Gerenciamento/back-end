import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { array, nullable } from "zod";
import { Attendant } from "../attendant/attendant.entity";
import { ReservationsHistory } from "../reservationsHistory/reservationsHistory.entity";
import { Guest } from "../guest/guest.entity";
import { Room } from "../room/room.entity";

@Entity("reservations")
export class Reservations {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "date" })
  checkin: Date;

  @Column({ type: "date" })
  checkout: Date;

  @Column({ type: "int" })
  numberAdults: number;

  @Column({ type: "int" })
  numberKids: number;

  @Column({ type: "int" })
  numberRoom: number;

  @Column({ length: 80, type: "varchar" })
  feedBack: string;

  @ManyToOne(() => Attendant, (attendant) => attendant.reservations)
  @JoinColumn()
  attendant: Attendant;

  @ManyToMany(() => Guest, (guest) => guest.reservations)
  @JoinTable()
  guests: Guest[];

  @ManyToOne(() => Room, (room) => room.reservation)
  @JoinColumn()
  rooms: Room[];
}
