import { Module } from '@nestjs/common';
import { LinesController } from './controllers/lines.controller';
import { LinesService } from './services/lines.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lines } from './entities/lines.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lines])],
  controllers: [LinesController],
  providers: [LinesService]
})
export class LinesModule {}
