import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';

@Injectable()
export class CategoryService {
  private categories: Category[] = [
    new Category('Food', 'expense', '#dc2626', false),
    new Category('Clothes', 'expense', '#dc2626', true),
    new Category('Salary', 'income', '#dc2626', false),
  ];

  getCategory() {
    return this.categories.slice();
  }

  editCategory(category: Category) {
    this.categories.find((cat) => {
      if (cat.name === category.name) {
        cat.name = category.name;
        cat.type = category.type;
        cat.color = category.color;
        cat.favourite = category.favourite;
      }
    });
  }

  addCategory(category: Category) {
    this.categories.push(category);
  }
}
