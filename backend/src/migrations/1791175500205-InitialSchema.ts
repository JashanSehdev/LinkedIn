import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1791175500205 implements MigrationInterface {
    name = 'InitialSchema1791175500205'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "like" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "postId" integer NOT NULL, "type" integer NOT NULL, CONSTRAINT "PK_eff3e46d24d416b52a7e0ae4159" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "comment" ("id" SERIAL NOT NULL, "text" character varying NOT NULL, "parentId" integer, "userId" integer NOT NULL, "postId" integer NOT NULL, CONSTRAINT "PK_0b0e4bbc8415ec426f87f3a88e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "post" ("id" SERIAL NOT NULL, "content" character varying NOT NULL, "media" character varying, "shared" integer NOT NULL DEFAULT '0', "hashtags" character varying array NOT NULL DEFAULT '{}', "userId" integer, CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "job" ("id" SERIAL NOT NULL, "companyId" integer NOT NULL, "job_description" jsonb NOT NULL, CONSTRAINT "PK_98ab1c14ff8d1cf80d18703b92f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Company" ("id" SERIAL NOT NULL, "company_name" character varying NOT NULL, "category" character varying NOT NULL, "company_logo" character varying NOT NULL, "userId" integer NOT NULL, "location" character varying NOT NULL DEFAULT 'Unknown', CONSTRAINT "PK_b4993a6b3d3194767a59698298f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Follow" ("id" SERIAL NOT NULL, "followerId" integer NOT NULL, "followedId" integer NOT NULL, CONSTRAINT "UQ_5c962ac14d51bcb0621f08bc7a9" UNIQUE ("followedId", "followerId"), CONSTRAINT "PK_27e69dfbce1677dd9bc581f2a38" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."Connection_status_enum" AS ENUM('PENDING', 'ACCEPTED', 'REJECTED')`);
        await queryRunner.query(`CREATE TABLE "Connection" ("id" SERIAL NOT NULL, "receiverId" integer NOT NULL, "senderId" integer NOT NULL, "status" "public"."Connection_status_enum" NOT NULL DEFAULT 'PENDING', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_5ca08c4ea0f5a8756deca92bdee" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "File" ("id" SERIAL NOT NULL, "message_id" integer NOT NULL, "file_url" character varying, "file_name" character varying NOT NULL, "file_type" character varying NOT NULL, "file_size" integer NOT NULL, CONSTRAINT "PK_b287aa0a177c20740f3d917e38f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Message" ("id" SERIAL NOT NULL, "chat_id" integer NOT NULL, "sender_id" integer NOT NULL, "text" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_7dd6398f0d1dcaf73df342fa325" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Chat" ("id" SERIAL NOT NULL, "user1_id" integer NOT NULL, "user2_id" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d9fa791e91c30baf21d778d3f2f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "username" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "AppliedJob" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "jobId" integer NOT NULL, CONSTRAINT "PK_76010c7423b2297bd8b95f14f11" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."notification_type_enum" AS ENUM('CONNECTION_REQUEST', 'CONNECTION_ACCEPTED', 'POST_LIKED', 'POST_COMMENTED', 'FOLLOWED')`);
        await queryRunner.query(`CREATE TABLE "notification" ("id" SERIAL NOT NULL, "recipientId" integer NOT NULL, "senderId" integer NOT NULL, "type" "public"."notification_type_enum" NOT NULL, "isRead" boolean NOT NULL DEFAULT false, "referenceId" integer, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_705b6c7cdf9b2c2ff7ac7872cb7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "like" ADD CONSTRAINT "FK_e8fb739f08d47955a39850fac23" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "like" ADD CONSTRAINT "FK_3acf7c55c319c4000e8056c1279" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_e3aebe2bd1c53467a07109be596" FOREIGN KEY ("parentId") REFERENCES "comment"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_c0354a9a009d3bb45a08655ce3b" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_94a85bb16d24033a2afdd5df060" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "FK_5c1cf55c308037b5aca1038a131" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "job" ADD CONSTRAINT "FK_e66170573cabd565dab1132727d" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Company" ADD CONSTRAINT "FK_588758d1d2ae16fe80ba3a7777f" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Follow" ADD CONSTRAINT "FK_95e2aeeb6fb7219c842d9ec0947" FOREIGN KEY ("followerId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Follow" ADD CONSTRAINT "FK_b0a7ef80bae1293c715c708029e" FOREIGN KEY ("followedId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Connection" ADD CONSTRAINT "FK_6933277c68bfd7c926b41d19455" FOREIGN KEY ("senderId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Connection" ADD CONSTRAINT "FK_42e4f4a1f9ea96a12c322be3912" FOREIGN KEY ("receiverId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "File" ADD CONSTRAINT "FK_575fa67c522a26a086022503c91" FOREIGN KEY ("message_id") REFERENCES "Message"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Message" ADD CONSTRAINT "FK_e5bed515c56dda89dc3d3f93b5d" FOREIGN KEY ("chat_id") REFERENCES "Chat"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Message" ADD CONSTRAINT "FK_89f1dcceebab9e5e52ea9f60053" FOREIGN KEY ("sender_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Chat" ADD CONSTRAINT "FK_4a6d85102dc33f6acc5471159b6" FOREIGN KEY ("user1_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Chat" ADD CONSTRAINT "FK_80a29d5ab4d1dec6bab596113a9" FOREIGN KEY ("user2_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "AppliedJob" ADD CONSTRAINT "FK_38cfc1a88d74c0c2e279cf7de06" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "AppliedJob" ADD CONSTRAINT "FK_ad486809613b6296eec9e60d645" FOREIGN KEY ("jobId") REFERENCES "job"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "AppliedJob" DROP CONSTRAINT "FK_ad486809613b6296eec9e60d645"`);
        await queryRunner.query(`ALTER TABLE "AppliedJob" DROP CONSTRAINT "FK_38cfc1a88d74c0c2e279cf7de06"`);
        await queryRunner.query(`ALTER TABLE "Chat" DROP CONSTRAINT "FK_80a29d5ab4d1dec6bab596113a9"`);
        await queryRunner.query(`ALTER TABLE "Chat" DROP CONSTRAINT "FK_4a6d85102dc33f6acc5471159b6"`);
        await queryRunner.query(`ALTER TABLE "Message" DROP CONSTRAINT "FK_89f1dcceebab9e5e52ea9f60053"`);
        await queryRunner.query(`ALTER TABLE "Message" DROP CONSTRAINT "FK_e5bed515c56dda89dc3d3f93b5d"`);
        await queryRunner.query(`ALTER TABLE "File" DROP CONSTRAINT "FK_575fa67c522a26a086022503c91"`);
        await queryRunner.query(`ALTER TABLE "Connection" DROP CONSTRAINT "FK_42e4f4a1f9ea96a12c322be3912"`);
        await queryRunner.query(`ALTER TABLE "Connection" DROP CONSTRAINT "FK_6933277c68bfd7c926b41d19455"`);
        await queryRunner.query(`ALTER TABLE "Follow" DROP CONSTRAINT "FK_b0a7ef80bae1293c715c708029e"`);
        await queryRunner.query(`ALTER TABLE "Follow" DROP CONSTRAINT "FK_95e2aeeb6fb7219c842d9ec0947"`);
        await queryRunner.query(`ALTER TABLE "Company" DROP CONSTRAINT "FK_588758d1d2ae16fe80ba3a7777f"`);
        await queryRunner.query(`ALTER TABLE "job" DROP CONSTRAINT "FK_e66170573cabd565dab1132727d"`);
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "FK_5c1cf55c308037b5aca1038a131"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_94a85bb16d24033a2afdd5df060"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_c0354a9a009d3bb45a08655ce3b"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_e3aebe2bd1c53467a07109be596"`);
        await queryRunner.query(`ALTER TABLE "like" DROP CONSTRAINT "FK_3acf7c55c319c4000e8056c1279"`);
        await queryRunner.query(`ALTER TABLE "like" DROP CONSTRAINT "FK_e8fb739f08d47955a39850fac23"`);
        await queryRunner.query(`DROP TABLE "notification"`);
        await queryRunner.query(`DROP TYPE "public"."notification_type_enum"`);
        await queryRunner.query(`DROP TABLE "AppliedJob"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "Chat"`);
        await queryRunner.query(`DROP TABLE "Message"`);
        await queryRunner.query(`DROP TABLE "File"`);
        await queryRunner.query(`DROP TABLE "Connection"`);
        await queryRunner.query(`DROP TYPE "public"."Connection_status_enum"`);
        await queryRunner.query(`DROP TABLE "Follow"`);
        await queryRunner.query(`DROP TABLE "Company"`);
        await queryRunner.query(`DROP TABLE "job"`);
        await queryRunner.query(`DROP TABLE "post"`);
        await queryRunner.query(`DROP TABLE "comment"`);
        await queryRunner.query(`DROP TABLE "like"`);
    }

}
