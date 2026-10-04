import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1791022837970 implements MigrationInterface {
    name = 'InitialSchema1791022837970'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."Connection_status_enum" AS ENUM('PENDING', 'ACCEPTED', 'REJECTED')`);
        await queryRunner.query(`CREATE TABLE "Connection" ("id" SERIAL NOT NULL, "receiverId" integer NOT NULL, "senderId" integer NOT NULL, "status" "public"."Connection_status_enum" NOT NULL DEFAULT 'PENDING', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_5ca08c4ea0f5a8756deca92bdee" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Connection" ADD CONSTRAINT "FK_6933277c68bfd7c926b41d19455" FOREIGN KEY ("senderId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Connection" ADD CONSTRAINT "FK_42e4f4a1f9ea96a12c322be3912" FOREIGN KEY ("receiverId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Connection" DROP CONSTRAINT "FK_42e4f4a1f9ea96a12c322be3912"`);
        await queryRunner.query(`ALTER TABLE "Connection" DROP CONSTRAINT "FK_6933277c68bfd7c926b41d19455"`);
        await queryRunner.query(`DROP TABLE "Connection"`);
        await queryRunner.query(`DROP TYPE "public"."Connection_status_enum"`);
    }

}
