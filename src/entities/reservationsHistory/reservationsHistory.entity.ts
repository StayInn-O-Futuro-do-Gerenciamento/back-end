import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class ReservationsHistory {
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

  @Column({ type: "varchar" })
  guestId: string;

  @Column({ type: "varchar" })
  roomID: string;

  @Column({ type: "varchar" })
  attendantId: string;
}
