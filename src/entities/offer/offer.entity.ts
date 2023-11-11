import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TypeRoom } from "../typeRoom/typeRoom.entity";

@Entity("offer")
export class Offer {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 80, type: "varchar" })
  offerName: string;

  @Column({ type: "text" })
  offerDescription: string;

  @Column({ type: "decimal" })
  discount: number;

  @Column({ type: "timestamp" })
  startDate: string | Date;

  @Column({ type: "timestamp" })
  finishDate: string | Date;

  @ManyToMany(() => TypeRoom, (typeRoom) => typeRoom.offer)
  typeRoom: TypeRoom;
}
