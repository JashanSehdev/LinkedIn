import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1791228729195 implements MigrationInterface {
    name = 'InitialSchema1791228729195'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "content" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "content" SET NOT NULL`);
    }

}
