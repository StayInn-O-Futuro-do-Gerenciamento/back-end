import { Column, Entity, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { array, nullable } from "zod";

@Entity()
class ReservationsHistory {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "date" })
  checkin: Date;

  @Column({ type: "date" })
  checkout: Date;
}
