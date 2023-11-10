import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { array, nullable } from "zod";
import { Reservations } from "../reservations/reservations.entity";
import { Address } from "../address/address.entity";

@Entity("guest")
export class Guest {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50, type: "varchar" })
  name: string;

  @Column({ length: 10, type: "varchar" })
  rg: string;

  @Column({ length: 11, type: "varchar" })
  cpf: string;

  @Column({ length: 6, type: "varchar", nullable: true })
  passport: string | null;

  @Column({ length: 15, type: "varchar" })
  nationality: string;

  @Column({ array: true, type: "varchar" })
  phoneNumbers: string[];

  @Column({ array: true, type: "varchar" })
  emergencyContacts: { name: string; phoneNumber: string }[];

  @OneToOne(() => Address, (address) => address.guest)
  @JoinColumn()
  address: Address;

  @ManyToMany(() => Reservations, (reservation) => reservation.guests)
  reservations: Reservations[];
}
