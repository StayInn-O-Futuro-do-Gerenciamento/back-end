import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("attendant")
export class Attendant {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 50 })
  name: string;

  @Column({ type: "varchar", length: 20 })
  password: string;

  @Column({ type: "varchar", default: "Attendant" })
  type: string;
}
