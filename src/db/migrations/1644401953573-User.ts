import { MigrationInterface, QueryRunner } from 'typeorm';

export class User1644401953573 implements MigrationInterface {
  name = 'User1644401953573';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "date_of_birth" character varying NOT NULL, "password" character varying NOT NULL, "country" character varying NOT NULL, "gender" character varying NOT NULL, "update_at" TIMESTAMP NOT NULL DEFAULT now(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
