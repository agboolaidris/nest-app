import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5434,
  username: 'postgres',
  password: '123',
  database: 'db',
  synchronize: true,
  logging: true,
  entities: ['dist/**/*.entity.js'],
};

const dataSoure = new DataSource(dataSourceOptions);

export default dataSoure;
