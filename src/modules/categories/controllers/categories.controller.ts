import { Controller, Get } from '@nestjs/common';
import { CategoriesService } from '../services/categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(
    private categoriesService: CategoriesService,
  ) {}

  @Get('/getAll')
  getCategories() {
    return this.categoriesService.getCategories(); 
  }
}
