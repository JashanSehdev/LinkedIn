import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1791260910488 implements MigrationInterface {
    name = 'InitialSchema1791260910488'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_94a85bb16d24033a2afdd5df060"`);
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "FK_985731f28966e0d45a7bd9078a6"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "isRepost" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "post" ADD "repostOfId" integer`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "content" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_94a85bb16d24033a2afdd5df060" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "FK_f9040b3a424d9faba274875df03" FOREIGN KEY ("repostOfId") REFERENCES "post"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "FK_f9040b3a424d9faba274875df03"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_94a85bb16d24033a2afdd5df060"`);
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "content" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "repostOfId"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "isRepost"`);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "FK_985731f28966e0d45a7bd9078a6" FOREIGN KEY ("parentId") REFERENCES "post"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_94a85bb16d24033a2afdd5df060" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
