import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { ConfigService } from '@nestjs/config';
 
config();

const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT, 10),
  database: process.env.POSTGRES_DB,
  entities: ['/../**/*.entity{.ts,.js}'],
  migrations: ['src/modules/database/migrations/*{.ts,.js}'],
});
