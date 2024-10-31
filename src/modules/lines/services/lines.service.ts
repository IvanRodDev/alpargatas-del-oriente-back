import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lines } from '../entities/lines.entity';

@Injectable()
export class LinesService {
  constructor(
    @InjectRepository(Lines) private LinesRepository: Repository<Lines>,
  ) {}

  getLines() {
    return this.LinesRepository.find({
        relations:['subLines','products','subLines.products']
    });
  }
}
