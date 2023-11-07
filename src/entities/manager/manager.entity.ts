import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("manager")
export class Manager {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 50 })
  name: string;

  @Column({ type: "varchar", length: 20 })
  password: string;

  @Column({ type: "varchar", default: "Manager" })
  type: string;
}
