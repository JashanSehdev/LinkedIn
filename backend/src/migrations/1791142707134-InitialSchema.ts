import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1791142707134 implements MigrationInterface {
    name = 'InitialSchema1791142707134'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "File" DROP CONSTRAINT "FK_575fa67c522a26a086022503c91"`);
        await queryRunner.query(`ALTER TABLE "File" DROP COLUMN "file_sizd"`);
        await queryRunner.query(`ALTER TABLE "File" ADD "file_url" character varying`);
        await queryRunner.query(`ALTER TABLE "File" ADD "file_size" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "File" ADD CONSTRAINT "FK_575fa67c522a26a086022503c91" FOREIGN KEY ("message_id") REFERENCES "Message"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "File" DROP CONSTRAINT "FK_575fa67c522a26a086022503c91"`);
        await queryRunner.query(`ALTER TABLE "File" DROP COLUMN "file_size"`);
        await queryRunner.query(`ALTER TABLE "File" DROP COLUMN "file_url"`);
        await queryRunner.query(`ALTER TABLE "File" ADD "file_sizd" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "File" ADD CONSTRAINT "FK_575fa67c522a26a086022503c91" FOREIGN KEY ("message_id") REFERENCES "Message"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
