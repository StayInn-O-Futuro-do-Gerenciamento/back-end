import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

const Status = {
  clean: "Limpo",
  dirty: "Sujo",
  maintenance: "Em Manutenção",
  occupied: "Ocupado",
  available: "Disponível",
};

@Entity("room")
export class Room {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar" })
  roomNumber: string;

  @Column({ type: "enum", enum: Status, default: Status.available })
  status: string;

  @Column({ length: 20, type: "varchar" })
  secretKey: string;

  @Column({ type: "varchar" })
  floor: string;
}
