import { Column, Entity, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { array, nullable } from "zod";

@Entity("reservations")
class Reservations {
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
}
