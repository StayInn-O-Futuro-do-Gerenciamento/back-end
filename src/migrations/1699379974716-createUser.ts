import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1699379974716 implements MigrationInterface {
    name = 'CreateUser1699379974716'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "reservations_guests_guest" ("reservationsId" uuid NOT NULL, "guestId" uuid NOT NULL, CONSTRAINT "PK_109a00b6e3e392156a7fb8c0761" PRIMARY KEY ("reservationsId", "guestId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_741356e6e42fe42fd663805a5b" ON "reservations_guests_guest" ("reservationsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_15f90620f2e0f6da2220148674" ON "reservations_guests_guest" ("guestId") `);
        await queryRunner.query(`ALTER TABLE "reservations_guests_guest" ADD CONSTRAINT "FK_741356e6e42fe42fd663805a5b7" FOREIGN KEY ("reservationsId") REFERENCES "reservations"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "reservations_guests_guest" ADD CONSTRAINT "FK_15f90620f2e0f6da22201486741" FOREIGN KEY ("guestId") REFERENCES "guest"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reservations_guests_guest" DROP CONSTRAINT "FK_15f90620f2e0f6da22201486741"`);
        await queryRunner.query(`ALTER TABLE "reservations_guests_guest" DROP CONSTRAINT "FK_741356e6e42fe42fd663805a5b7"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_15f90620f2e0f6da2220148674"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_741356e6e42fe42fd663805a5b"`);
        await queryRunner.query(`DROP TABLE "reservations_guests_guest"`);
    }

}
