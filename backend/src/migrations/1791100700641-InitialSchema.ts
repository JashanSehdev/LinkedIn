import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1791100700641 implements MigrationInterface {
    name = 'InitialSchema1791100700641'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "File" ("id" SERIAL NOT NULL, "message_id" integer NOT NULL, "file_name" character varying NOT NULL, "file_type" character varying NOT NULL, "file_sizd" integer NOT NULL, CONSTRAINT "PK_b287aa0a177c20740f3d917e38f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Message" ("id" SERIAL NOT NULL, "chat_id" integer NOT NULL, "sender_id" integer NOT NULL, "text" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_7dd6398f0d1dcaf73df342fa325" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Chat" ("id" SERIAL NOT NULL, "user1_id" integer NOT NULL, "user2_id" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d9fa791e91c30baf21d778d3f2f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "File" ADD CONSTRAINT "FK_575fa67c522a26a086022503c91" FOREIGN KEY ("message_id") REFERENCES "Message"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Message" ADD CONSTRAINT "FK_e5bed515c56dda89dc3d3f93b5d" FOREIGN KEY ("chat_id") REFERENCES "Chat"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Message" ADD CONSTRAINT "FK_89f1dcceebab9e5e52ea9f60053" FOREIGN KEY ("sender_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Chat" ADD CONSTRAINT "FK_4a6d85102dc33f6acc5471159b6" FOREIGN KEY ("user1_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Chat" ADD CONSTRAINT "FK_80a29d5ab4d1dec6bab596113a9" FOREIGN KEY ("user2_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Chat" DROP CONSTRAINT "FK_80a29d5ab4d1dec6bab596113a9"`);
        await queryRunner.query(`ALTER TABLE "Chat" DROP CONSTRAINT "FK_4a6d85102dc33f6acc5471159b6"`);
        await queryRunner.query(`ALTER TABLE "Message" DROP CONSTRAINT "FK_89f1dcceebab9e5e52ea9f60053"`);
        await queryRunner.query(`ALTER TABLE "Message" DROP CONSTRAINT "FK_e5bed515c56dda89dc3d3f93b5d"`);
        await queryRunner.query(`ALTER TABLE "File" DROP CONSTRAINT "FK_575fa67c522a26a086022503c91"`);
        await queryRunner.query(`DROP TABLE "Chat"`);
        await queryRunner.query(`DROP TABLE "Message"`);
        await queryRunner.query(`DROP TABLE "File"`);
    }

}
