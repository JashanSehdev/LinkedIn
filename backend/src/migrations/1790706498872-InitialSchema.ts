import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1790706498872 implements MigrationInterface {
    name = 'InitialSchema1790706498872'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "media" character varying`);
        await queryRunner.query(`ALTER TABLE "post" ADD "author" character varying  DEFAULT 'Unkown'`);
        await queryRunner.query(`ALTER TABLE "post" ADD "shared" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "post" ADD "hashtags" character varying array NOT NULL DEFAULT '{}'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "hashtags"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "shared"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "author"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "media"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "image" character varying NOT NULL`);
    }

}
