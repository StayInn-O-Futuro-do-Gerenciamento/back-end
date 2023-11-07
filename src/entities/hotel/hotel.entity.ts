import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("hotel")
export class Hotel {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "int" })
  numberRoomsTotal: number;

  @Column({ type: "int" })
  numberFloorsTotal: number;

  @Column({ type: "varchar" })
  street: string;

  @Column({ type: "varchar" })
  number: string;

  @Column({ type: "varchar" })
  zipCode: string;

  @Column({ type: "varchar" })
  city: string;
}
