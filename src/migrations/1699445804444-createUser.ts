import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1699445804444 implements MigrationInterface {
    name = 'CreateUser1699445804444'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "typeRomm" ADD "roomTypeQuantity" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "attendant" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "attendant" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "manager" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "manager" ADD "password" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "manager" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "manager" ADD "password" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "attendant" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "attendant" ADD "password" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "typeRomm" DROP COLUMN "roomTypeQuantity"`);
    }

}
