import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1699372612640 implements MigrationInterface {
    name = 'CreateUser1699372612640'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "typeRomm" ADD "offerId" uuid`);
        await queryRunner.query(`ALTER TABLE "room" ADD "typeRoomId" uuid`);
        await queryRunner.query(`ALTER TABLE "typeRomm" ADD CONSTRAINT "FK_a96260858dec2487ca7f010fcea" FOREIGN KEY ("offerId") REFERENCES "offer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "room" ADD CONSTRAINT "FK_7f889c73416bfbca9dca751a6b8" FOREIGN KEY ("typeRoomId") REFERENCES "typeRomm"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "room" DROP CONSTRAINT "FK_7f889c73416bfbca9dca751a6b8"`);
        await queryRunner.query(`ALTER TABLE "typeRomm" DROP CONSTRAINT "FK_a96260858dec2487ca7f010fcea"`);
        await queryRunner.query(`ALTER TABLE "room" DROP COLUMN "typeRoomId"`);
        await queryRunner.query(`ALTER TABLE "typeRomm" DROP COLUMN "offerId"`);
    }

}
