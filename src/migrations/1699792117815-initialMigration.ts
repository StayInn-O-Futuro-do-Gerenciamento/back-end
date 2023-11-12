import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1699792117815 implements MigrationInterface {
    name = 'InitialMigration1699792117815'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reservations" DROP COLUMN "checkin"`);
        await queryRunner.query(`ALTER TABLE "reservations" ADD "checkin" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reservations" DROP COLUMN "checkout"`);
        await queryRunner.query(`ALTER TABLE "reservations" ADD "checkout" TIMESTAMP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reservations" DROP COLUMN "checkout"`);
        await queryRunner.query(`ALTER TABLE "reservations" ADD "checkout" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reservations" DROP COLUMN "checkin"`);
        await queryRunner.query(`ALTER TABLE "reservations" ADD "checkin" date NOT NULL`);
    }

}
