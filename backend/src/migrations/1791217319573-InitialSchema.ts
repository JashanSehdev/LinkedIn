import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1791217319573 implements MigrationInterface {
    name = 'InitialSchema1791217319573'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" ADD "parentId" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "parentId"`);
    }

}
