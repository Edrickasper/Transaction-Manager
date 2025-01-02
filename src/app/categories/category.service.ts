import { Injectable } from "@angular/core";
import { Category } from "../models/category.model";

@Injectable()

export class CategoryService {
    private categories: Category[] = [
        new Category('Food', 'expense', '#ff00ff', false),
        new Category('Clothes', 'expense', 'green', false),
        new Category('Salary', 'income', 'blue', false),
        new Category('Salary', 'income', 'blue', false),
        new Category('Salary', 'income', 'blue', false),
        new Category('Salary', 'income', 'blue', false),
        new Category('Salary', 'income', 'blue', false),
        new Category('Salary', 'income', 'blue', false),
    ]

    getCategory() {
        return this.categories.slice();
    }

    updateCategory(category: Category) {
        this.categories.push(category);
    }
}