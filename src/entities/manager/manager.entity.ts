import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Attendant } from "../attendant/attendant.entity";
import { Hotel } from "../hotel/hotel.entity";
import { hashSync } from "bcryptjs";

@Entity("manager")
export class Manager {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 50 })
  name: string;

  @Column({ type: "varchar" })
  password: string;

  @Column({ type: "varchar", default: "Manager" })
  type: string;

  @OneToOne(() => Hotel, (hotel) => hotel.manager)
  hotel: Hotel;

  @OneToMany(() => Attendant, (attendant) => attendant.manager)
  attendants: Attendant[];

  @BeforeInsert()
  @BeforeUpdate()
  hashPass() {
    this.password = hashSync(this.password, 9);
  }
}
