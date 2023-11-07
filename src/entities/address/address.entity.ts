import { Column, Entity, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { array, nullable } from "zod";

@Entity("address")
export class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50, type: "varchar" })
  street: string;

  @Column({ length: 10, type: "varchar" })
  number: string;

  @Column({ length: 10, type: "varchar" })
  city: string;

  @Column({ length: 10, type: "varchar" })
  state: string;

  @Column({ length: 10, type: "varchar" })
  zipCode: string;
}
