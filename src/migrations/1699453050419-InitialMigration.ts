import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1699453050419 implements MigrationInterface {
    name = 'InitialMigration1699453050419'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hotel" ALTER COLUMN "numberRoomsTotal" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "hotel" ALTER COLUMN "numberFloorsTotal" SET DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hotel" ALTER COLUMN "numberFloorsTotal" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "hotel" ALTER COLUMN "numberRoomsTotal" DROP DEFAULT`);
    }

}
