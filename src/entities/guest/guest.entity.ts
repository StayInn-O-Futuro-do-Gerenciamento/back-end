import {
  Column,
  Entity,
  JoinColumn,
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
  rg: number;

  @Column({ length: 11, type: "varchar" })
  cpf: number;

  @Column({ length: 6, type: "varchar", nullable: true })
  passport: number | null;

  @Column({ length: 15, type: "varchar" })
  nationality: string;

  @Column({ array: true, length: 9, type: "varchar" })
  phoneNumbers: string[];

  @Column({ array: true, length: 9, type: "varchar" })
  emergencyContacts: { name: string; phoneNumber: string }[];

  @OneToOne(() => Address, (address) => address.guest)
  @JoinColumn()
  address: Address;

  @ManyToOne(() => Reservations, (reservation) => reservation.guests)
  reservation: Array<Reservations>;
}
