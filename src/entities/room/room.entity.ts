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
};

@Entity("room")
export class Room {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar" })
  roomNumber: string;

  @Column({ type: "enum", enum: Status, default: Status.clean })
  status: string;

  @Column({ length: 20, type: "varchar" })
  secretKey: string;

  @Column({ type: "varchar" })
  floor: string;

  @Column({ type: "boolean", default: true })
  available: boolean;

  @ManyToOne(() => Hotel, (hotel) => hotel.rooms)
  @JoinColumn()
  hotel: Hotel;

  @OneToMany(() => Reservations, (reservation) => reservation.rooms)
  reservation: Reservations[];

  @ManyToOne(() => TypeRoom, (typeRoom) => typeRoom.rooms)
  @JoinColumn()
  typeRoom: TypeRoom;
}
