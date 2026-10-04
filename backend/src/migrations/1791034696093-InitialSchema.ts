import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1791034696093 implements MigrationInterface {
    name = 'InitialSchema1791034696093'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."notification_type_enum" AS ENUM('CONNECTION_REQUEST', 'CONNECTION_ACCEPTED', 'POST_LIKED', 'POST_COMMENTED', 'FOLLOWED')`);
        await queryRunner.query(`CREATE TABLE "notification" ("id" SERIAL NOT NULL, "recipientId" integer NOT NULL, "senderId" integer NOT NULL, "type" "public"."notification_type_enum" NOT NULL, "isRead" boolean NOT NULL DEFAULT false, "referenceId" integer, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_705b6c7cdf9b2c2ff7ac7872cb7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "notification"`);
        await queryRunner.query(`DROP TYPE "public"."notification_type_enum"`);
    }

}
