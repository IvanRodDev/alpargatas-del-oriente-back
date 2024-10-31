import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categories } from 'src/modules/categories/entities/categories.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(@InjectRepository(Categories)  private cateogiresRepository: Repository<Categories>, ) {}

  getCategories() {
    return this.cateogiresRepository.find({
      relations: ['lines','lines.subLines','lines.products','lines.subLines.products'],
    });
  }
}
