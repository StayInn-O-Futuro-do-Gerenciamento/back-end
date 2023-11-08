import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { hashSync } from "bcryptjs";
import { Manager, Reservations } from "../index";

@Entity("attendant")
export class Attendant {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 50 })
  name: string;

  @Column({ type: "varchar" })
  password: string;

  @Column({ type: "varchar", default: "Attendant" })
  type: string;

  @ManyToOne(() => Manager, (manager) => manager.attendants)
  @JoinColumn()
  manager: Manager;

  @OneToMany(() => Reservations, (reservation) => reservation.attendant)
  reservations: Array<Reservations>;

  @BeforeInsert()
  @BeforeUpdate()
  hashPass() {
    this.password = hashSync(this.password, 9);
  }
}
