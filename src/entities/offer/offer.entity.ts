import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

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
}
