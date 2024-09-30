import { Module } from '@nestjs/common';
import { CategoriesController } from './controllers/categories.controller';
import { CategoriesService } from './services/categories.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categories } from './entities/categories.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Categories])],
  controllers: [CategoriesController],
  providers: [CategoriesService]
})
export class CategoriesModule {}
