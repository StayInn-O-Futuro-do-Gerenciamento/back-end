import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1699562139707 implements MigrationInterface {
    name = 'CreateUser1699562139707'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "attendant" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "password" character varying NOT NULL, "type" character varying NOT NULL DEFAULT 'Attendant', "managerId" uuid, CONSTRAINT "PK_0f816ac9013a3351bfb034bdc2a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "offer" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "offerName" character varying(80) NOT NULL, "offerDescription" text NOT NULL, "discount" numeric NOT NULL, "startDate" TIMESTAMP NOT NULL, "finishDate" TIMESTAMP NOT NULL, CONSTRAINT "PK_57c6ae1abe49201919ef68de900" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."typeRomm_rate_enum" AS ENUM('Restrito', 'Flexível', 'Sem reembolso')`);
        await queryRunner.query(`CREATE TABLE "typeRomm" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(80) NOT NULL, "description" text NOT NULL, "confort" text NOT NULL, "price" numeric NOT NULL, "personCount" integer NOT NULL, "rate" "public"."typeRomm_rate_enum" NOT NULL DEFAULT 'Flexível', "roomTypeQuantity" integer NOT NULL, "offerId" uuid, CONSTRAINT "PK_67ff5fc4d7991fe0888dc882323" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "manager" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "password" character varying NOT NULL, "type" character varying NOT NULL DEFAULT 'Manager', CONSTRAINT "PK_b3ac840005ee4ed76a7f1c51d01" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "hotel" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "numberRoomsTotal" integer NOT NULL DEFAULT '0', "roomsPerFloor" integer NOT NULL DEFAULT '0', "street" character varying NOT NULL, "number" character varying NOT NULL, "zipCode" character varying NOT NULL, "city" character varying NOT NULL, "managerId" uuid, CONSTRAINT "REL_1bae42d07bca7d7e7ddf0b59d5" UNIQUE ("managerId"), CONSTRAINT "PK_3a62ac86b369b36c1a297e9ab26" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."room_status_enum" AS ENUM('Limpo', 'Sujo', 'Em Manutenção', 'Ocupado', 'Disponível')`);
        await queryRunner.query(`CREATE TABLE "room" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "roomNumber" character varying NOT NULL, "status" "public"."room_status_enum" NOT NULL DEFAULT 'Disponível', "secretKey" character varying(20) NOT NULL, "floor" character varying NOT NULL, "hotelId" uuid, "typeRoomId" uuid, CONSTRAINT "PK_c6d46db005d623e691b2fbcba23" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reservations" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "checkin" date NOT NULL, "checkout" date NOT NULL, "numberAdults" integer NOT NULL, "numberKids" integer NOT NULL, "numberRoom" integer NOT NULL, "feedBack" character varying(80) NOT NULL, "attendantId" uuid, "roomsId" uuid, CONSTRAINT "PK_da95cef71b617ac35dc5bcda243" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "guest" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "rg" character varying(10) NOT NULL, "cpf" character varying(11) NOT NULL, "passport" character varying(6), "nationality" character varying(15) NOT NULL, "phoneNumbers" character varying(9) array NOT NULL, "emergencyContacts" character varying(9) array NOT NULL, "addressId" uuid, CONSTRAINT "REL_6269845e556a23fe5eabac5a33" UNIQUE ("addressId"), CONSTRAINT "PK_57689d19445de01737dbc458857" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "street" character varying(50) NOT NULL, "number" character varying(10) NOT NULL, "city" character varying(10) NOT NULL, "state" character varying(10) NOT NULL, "zipCode" character varying(10) NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reservations_history" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "checkin" date NOT NULL, "checkout" date NOT NULL, "id_guest" character varying NOT NULL, "id_room" character varying NOT NULL, CONSTRAINT "PK_f4fe620edbaa0e8a1aa16133345" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reservations_guests_guest" ("reservationsId" uuid NOT NULL, "guestId" uuid NOT NULL, CONSTRAINT "PK_109a00b6e3e392156a7fb8c0761" PRIMARY KEY ("reservationsId", "guestId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_741356e6e42fe42fd663805a5b" ON "reservations_guests_guest" ("reservationsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_15f90620f2e0f6da2220148674" ON "reservations_guests_guest" ("guestId") `);
        await queryRunner.query(`ALTER TABLE "attendant" ADD CONSTRAINT "FK_962ef2517c8424481c3d6a6a88d" FOREIGN KEY ("managerId") REFERENCES "manager"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "typeRomm" ADD CONSTRAINT "FK_a96260858dec2487ca7f010fcea" FOREIGN KEY ("offerId") REFERENCES "offer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "hotel" ADD CONSTRAINT "FK_1bae42d07bca7d7e7ddf0b59d5d" FOREIGN KEY ("managerId") REFERENCES "manager"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "room" ADD CONSTRAINT "FK_2fac52abaa01b54156539cad11c" FOREIGN KEY ("hotelId") REFERENCES "hotel"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "room" ADD CONSTRAINT "FK_7f889c73416bfbca9dca751a6b8" FOREIGN KEY ("typeRoomId") REFERENCES "typeRomm"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reservations" ADD CONSTRAINT "FK_4820643dc7cf402c999a506a98b" FOREIGN KEY ("attendantId") REFERENCES "attendant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reservations" ADD CONSTRAINT "FK_3fde5fbb41bd376aebd803ea29c" FOREIGN KEY ("roomsId") REFERENCES "room"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "guest" ADD CONSTRAINT "FK_6269845e556a23fe5eabac5a33d" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reservations_guests_guest" ADD CONSTRAINT "FK_741356e6e42fe42fd663805a5b7" FOREIGN KEY ("reservationsId") REFERENCES "reservations"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "reservations_guests_guest" ADD CONSTRAINT "FK_15f90620f2e0f6da22201486741" FOREIGN KEY ("guestId") REFERENCES "guest"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reservations_guests_guest" DROP CONSTRAINT "FK_15f90620f2e0f6da22201486741"`);
        await queryRunner.query(`ALTER TABLE "reservations_guests_guest" DROP CONSTRAINT "FK_741356e6e42fe42fd663805a5b7"`);
        await queryRunner.query(`ALTER TABLE "guest" DROP CONSTRAINT "FK_6269845e556a23fe5eabac5a33d"`);
        await queryRunner.query(`ALTER TABLE "reservations" DROP CONSTRAINT "FK_3fde5fbb41bd376aebd803ea29c"`);
        await queryRunner.query(`ALTER TABLE "reservations" DROP CONSTRAINT "FK_4820643dc7cf402c999a506a98b"`);
        await queryRunner.query(`ALTER TABLE "room" DROP CONSTRAINT "FK_7f889c73416bfbca9dca751a6b8"`);
        await queryRunner.query(`ALTER TABLE "room" DROP CONSTRAINT "FK_2fac52abaa01b54156539cad11c"`);
        await queryRunner.query(`ALTER TABLE "hotel" DROP CONSTRAINT "FK_1bae42d07bca7d7e7ddf0b59d5d"`);
        await queryRunner.query(`ALTER TABLE "typeRomm" DROP CONSTRAINT "FK_a96260858dec2487ca7f010fcea"`);
        await queryRunner.query(`ALTER TABLE "attendant" DROP CONSTRAINT "FK_962ef2517c8424481c3d6a6a88d"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_15f90620f2e0f6da2220148674"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_741356e6e42fe42fd663805a5b"`);
        await queryRunner.query(`DROP TABLE "reservations_guests_guest"`);
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
