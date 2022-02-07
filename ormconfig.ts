import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'test',
  synchronize: false,
  logging: true,
  entities: ['dist/src/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'],
  cli: {
    entitiesDir: 'dist/src/**/*.entity.js',
    migrationsDir: 'dist/db/migrations',
  },
};

export default config;
