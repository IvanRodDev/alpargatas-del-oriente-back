import { Controller, Get } from '@nestjs/common';
import { LinesService } from '../services/lines.service';

@Controller('lines')
export class LinesController {
      constructor(private linesService: LinesService,
  ) {}
  
  @Get('/getAll')
  getLines() {
    return this.linesService.getLines();
  }
}
