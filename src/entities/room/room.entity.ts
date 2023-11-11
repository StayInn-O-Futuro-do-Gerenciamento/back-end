import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Hotel, Reservations, TypeRoom } from "../index";

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

  @ManyToOne(() => Hotel, (hotel) => hotel.rooms)
  @JoinColumn()
  hotel: Hotel;

  @OneToMany(() => Reservations, (reservation) => reservation.rooms)
  reservation: Reservations[];

  @ManyToOne(() => TypeRoom, (typeRoom) => typeRoom.rooms)
  @JoinColumn()
  typeRoom: TypeRoom;
}
