import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1790854272024 implements MigrationInterface {
    name = 'InitialSchema1790854272024'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Company" DROP CONSTRAINT "FK_b6ba59adc125a86a3076fa0fc18"`);
        await queryRunner.query(`ALTER TABLE "Company" RENAME COLUMN "jobsId" TO "location"`);
        await queryRunner.query(`CREATE TABLE "AppliedJob" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "jobId" integer NOT NULL, CONSTRAINT "PK_76010c7423b2297bd8b95f14f11" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Company" DROP COLUMN "location"`);
        await queryRunner.query(`ALTER TABLE "Company" ADD "location" character varying NOT NULL DEFAULT 'Unknown'`);
        await queryRunner.query(`ALTER TABLE "Company" ADD CONSTRAINT "FK_588758d1d2ae16fe80ba3a7777f" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "AppliedJob" ADD CONSTRAINT "FK_38cfc1a88d74c0c2e279cf7de06" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "AppliedJob" ADD CONSTRAINT "FK_ad486809613b6296eec9e60d645" FOREIGN KEY ("jobId") REFERENCES "job"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "AppliedJob" DROP CONSTRAINT "FK_ad486809613b6296eec9e60d645"`);
        await queryRunner.query(`ALTER TABLE "AppliedJob" DROP CONSTRAINT "FK_38cfc1a88d74c0c2e279cf7de06"`);
        await queryRunner.query(`ALTER TABLE "Company" DROP CONSTRAINT "FK_588758d1d2ae16fe80ba3a7777f"`);
        await queryRunner.query(`ALTER TABLE "Company" DROP COLUMN "location"`);
        await queryRunner.query(`ALTER TABLE "Company" ADD "location" integer`);
        await queryRunner.query(`DROP TABLE "AppliedJob"`);
        await queryRunner.query(`ALTER TABLE "Company" RENAME COLUMN "location" TO "jobsId"`);
        await queryRunner.query(`ALTER TABLE "Company" ADD CONSTRAINT "FK_b6ba59adc125a86a3076fa0fc18" FOREIGN KEY ("jobsId") REFERENCES "job"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
