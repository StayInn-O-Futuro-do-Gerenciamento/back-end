import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1699370140836 implements MigrationInterface {
    name = 'CreateUser1699370140836'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hotel" ADD "managerId" uuid`);
        await queryRunner.query(`ALTER TABLE "hotel" ADD CONSTRAINT "UQ_1bae42d07bca7d7e7ddf0b59d5d" UNIQUE ("managerId")`);
        await queryRunner.query(`ALTER TABLE "hotel" ADD CONSTRAINT "FK_1bae42d07bca7d7e7ddf0b59d5d" FOREIGN KEY ("managerId") REFERENCES "manager"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hotel" DROP CONSTRAINT "FK_1bae42d07bca7d7e7ddf0b59d5d"`);
        await queryRunner.query(`ALTER TABLE "hotel" DROP CONSTRAINT "UQ_1bae42d07bca7d7e7ddf0b59d5d"`);
        await queryRunner.query(`ALTER TABLE "hotel" DROP COLUMN "managerId"`);
    }

}
