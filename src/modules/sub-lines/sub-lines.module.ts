import { Module } from '@nestjs/common';
import { SubLinesService } from './services/sub-lines.service';
import { SubLinesController } from './controllers/sub-lines.controller';
import { SubLines } from './entities/sub-lines.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SubLines])],
  providers: [SubLinesService],
  controllers: [SubLinesController],
})
export class SubLinesModule {}
