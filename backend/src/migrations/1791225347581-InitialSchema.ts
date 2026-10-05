import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1791225347581 implements MigrationInterface {
    name = 'InitialSchema1791225347581'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "respostOfId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" ADD "respostOfId" integer`);
    }

}
