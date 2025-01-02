import { Component } from '@angular/core';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent{
  categories!: Category[]
  addCategory: boolean = false
}
