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
  checkin: Date | string;

  @Column({ type: "date" })
  checkout: Date | string;

  @Column({ type: "int" })
  numberAdults: number;

  @Column({ type: "int" })
  numberKids: number;

  @Column({ type: "int", enum: { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 }, default: 5 })
  feedBack: number;

  @ManyToOne(() => Attendant, (attendant) => attendant.reservations)
  @JoinColumn()
  attendant: Attendant;

  @ManyToMany(() => Guest, (guest) => guest.reservations)
  @JoinTable()
  guests: Guest;

  @ManyToOne(() => Room, (room) => room.reservation)
  @JoinColumn()
  rooms: Room;
}
