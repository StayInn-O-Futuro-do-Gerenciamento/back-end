import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1699369808288 implements MigrationInterface {
    name = 'CreateUser1699369808288'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "attendant" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "password" character varying(20) NOT NULL, "type" character varying NOT NULL DEFAULT 'Attendant', "managerId" uuid, CONSTRAINT "PK_0f816ac9013a3351bfb034bdc2a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "offer" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "offerName" character varying(80) NOT NULL, "offerDescription" text NOT NULL, "discount" numeric NOT NULL, "startDate" TIMESTAMP NOT NULL, "finishDate" TIMESTAMP NOT NULL, CONSTRAINT "PK_57c6ae1abe49201919ef68de900" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."typeRomm_rate_enum" AS ENUM('Restrito', 'Flexível', 'Sem reembolso')`);
        await queryRunner.query(`CREATE TABLE "typeRomm" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(80) NOT NULL, "description" text NOT NULL, "confort" text NOT NULL, "price" numeric NOT NULL, "personCount" integer NOT NULL, "rate" "public"."typeRomm_rate_enum" NOT NULL DEFAULT 'Flexível', CONSTRAINT "PK_67ff5fc4d7991fe0888dc882323" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "manager" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "password" character varying(20) NOT NULL, "type" character varying NOT NULL DEFAULT 'Manager', CONSTRAINT "PK_b3ac840005ee4ed76a7f1c51d01" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "hotel" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "numberRoomsTotal" integer NOT NULL, "numberFloorsTotal" integer NOT NULL, "street" character varying NOT NULL, "number" character varying NOT NULL, "zipCode" character varying NOT NULL, "city" character varying NOT NULL, CONSTRAINT "PK_3a62ac86b369b36c1a297e9ab26" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."room_status_enum" AS ENUM('Limpo', 'Sujo', 'Em Manutenção', 'Ocupado', 'Disponível')`);
        await queryRunner.query(`CREATE TABLE "room" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "roomNumber" character varying NOT NULL, "status" "public"."room_status_enum" NOT NULL DEFAULT 'Disponível', "secretKey" character varying(20) NOT NULL, "floor" character varying NOT NULL, "hotelId" uuid, CONSTRAINT "PK_c6d46db005d623e691b2fbcba23" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reservations" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "checkin" date NOT NULL, "checkout" date NOT NULL, "numberAdults" integer NOT NULL, "numberKids" integer NOT NULL, "numberRoom" integer NOT NULL, "feedBack" character varying(80) NOT NULL, "attendantId" uuid, "roomsId" uuid, CONSTRAINT "PK_da95cef71b617ac35dc5bcda243" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "guest" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "rg" character varying(10) NOT NULL, "cpf" character varying(11) NOT NULL, "passport" character varying(6), "nationality" character varying(15) NOT NULL, "phoneNumbers" character varying(9) array NOT NULL, "emergencyContacts" character varying(9) array NOT NULL, "addressId" uuid, "reservationId" uuid, CONSTRAINT "REL_6269845e556a23fe5eabac5a33" UNIQUE ("addressId"), CONSTRAINT "PK_57689d19445de01737dbc458857" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "street" character varying(50) NOT NULL, "number" character varying(10) NOT NULL, "city" character varying(10) NOT NULL, "state" character varying(10) NOT NULL, "zipCode" character varying(10) NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reservations_history" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "checkin" date NOT NULL, "checkout" date NOT NULL, "id_guest" character varying NOT NULL, "id_room" character varying NOT NULL, CONSTRAINT "PK_f4fe620edbaa0e8a1aa16133345" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "attendant" ADD CONSTRAINT "FK_962ef2517c8424481c3d6a6a88d" FOREIGN KEY ("managerId") REFERENCES "manager"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "room" ADD CONSTRAINT "FK_2fac52abaa01b54156539cad11c" FOREIGN KEY ("hotelId") REFERENCES "hotel"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reservations" ADD CONSTRAINT "FK_4820643dc7cf402c999a506a98b" FOREIGN KEY ("attendantId") REFERENCES "attendant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reservations" ADD CONSTRAINT "FK_3fde5fbb41bd376aebd803ea29c" FOREIGN KEY ("roomsId") REFERENCES "room"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "guest" ADD CONSTRAINT "FK_6269845e556a23fe5eabac5a33d" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "guest" ADD CONSTRAINT "FK_634c70ef4f0a25b35ba169574de" FOREIGN KEY ("reservationId") REFERENCES "reservations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "guest" DROP CONSTRAINT "FK_634c70ef4f0a25b35ba169574de"`);
        await queryRunner.query(`ALTER TABLE "guest" DROP CONSTRAINT "FK_6269845e556a23fe5eabac5a33d"`);
        await queryRunner.query(`ALTER TABLE "reservations" DROP CONSTRAINT "FK_3fde5fbb41bd376aebd803ea29c"`);
        await queryRunner.query(`ALTER TABLE "reservations" DROP CONSTRAINT "FK_4820643dc7cf402c999a506a98b"`);
        await queryRunner.query(`ALTER TABLE "room" DROP CONSTRAINT "FK_2fac52abaa01b54156539cad11c"`);
        await queryRunner.query(`ALTER TABLE "attendant" DROP CONSTRAINT "FK_962ef2517c8424481c3d6a6a88d"`);
        await queryRunner.query(`DROP TABLE "reservations_history"`);
        await queryRunner.query(`DROP TABLE "address"`);
        await queryRunner.query(`DROP TABLE "guest"`);
        await queryRunner.query(`DROP TABLE "reservations"`);
        await queryRunner.query(`DROP TABLE "room"`);
        await queryRunner.query(`DROP TYPE "public"."room_status_enum"`);
        await queryRunner.query(`DROP TABLE "hotel"`);
        await queryRunner.query(`DROP TABLE "manager"`);
        await queryRunner.query(`DROP TABLE "typeRomm"`);
        await queryRunner.query(`DROP TYPE "public"."typeRomm_rate_enum"`);
        await queryRunner.query(`DROP TABLE "offer"`);
        await queryRunner.query(`DROP TABLE "attendant"`);
    }

}
