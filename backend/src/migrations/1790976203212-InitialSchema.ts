import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1790976203212 implements MigrationInterface {
    name = 'InitialSchema1790976203212'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Follow" ("id" SERIAL NOT NULL, "followerId" integer NOT NULL, "followedId" integer NOT NULL, CONSTRAINT "UQ_5c962ac14d51bcb0621f08bc7a9" UNIQUE ("followedId", "followerId"), CONSTRAINT "PK_27e69dfbce1677dd9bc581f2a38" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Follow" ADD CONSTRAINT "FK_95e2aeeb6fb7219c842d9ec0947" FOREIGN KEY ("followerId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Follow" ADD CONSTRAINT "FK_b0a7ef80bae1293c715c708029e" FOREIGN KEY ("followedId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Follow" DROP CONSTRAINT "FK_b0a7ef80bae1293c715c708029e"`);
        await queryRunner.query(`ALTER TABLE "Follow" DROP CONSTRAINT "FK_95e2aeeb6fb7219c842d9ec0947"`);
        await queryRunner.query(`DROP TABLE "Follow"`);
    }

}
