import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Room } from "../room/room.entity";
import { Offer } from "../offer/offer.entity";

const Rate = {
  strics: "Restrito",
  flexible: "Flexível",
  nonRefundable: "Sem reembolso",
};

@Entity("typeRomm")
export class TypeRoom {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 80, type: "varchar" })
  name: string;

  @Column({ type: "text" })
  description: string;

  @Column({ type: "text" })
  confort: string;

  @Column({ type: "decimal" })
  price: number;

  @Column({ type: "int" })
  personCount: number;

  @Column({ type: "enum", enum: Rate, default: Rate.flexible })
  rate: string;

  @Column({ type: "int" })
  roomTypeQuantity: number;

  @OneToMany(() => Room, (room) => room.typeRoom)
  rooms: Room[];

  @ManyToOne(() => Offer, (offer) => offer.typeRoom)
  @JoinColumn()
  offer: Offer;
}
