import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

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
}
