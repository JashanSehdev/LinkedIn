import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1790763718266 implements MigrationInterface {
    name = 'InitialSchema1790763718266'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "comment" ("id" SERIAL NOT NULL, "text" character varying NOT NULL, "parentId" integer, "userId" integer NOT NULL, "postId" integer NOT NULL, CONSTRAINT "PK_0b0e4bbc8415ec426f87f3a88e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "author" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "author" SET DEFAULT 'Unknown'`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_c0354a9a009d3bb45a08655ce3b" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_94a85bb16d24033a2afdd5df060" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_94a85bb16d24033a2afdd5df060"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_c0354a9a009d3bb45a08655ce3b"`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "author" SET DEFAULT 'Unkown'`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "author" DROP NOT NULL`);
        await queryRunner.query(`DROP TABLE "comment"`);
    }

}
