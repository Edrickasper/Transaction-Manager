import { Component, inject } from '@angular/core';
import { Category } from '../models/category.model';
import { MatDialog } from '@angular/material/dialog';
import { AddCategoryComponent } from './add-category/add-category.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent{
  categories!: Category[]
  addCategory: boolean = false

  private dialog = inject(MatDialog)

  openPopup() {
    this.dialog.open(AddCategoryComponent, {
      width: '60%',
      height: 'auto',
      data: {
        title: 'Add Category'
      }
    })
  }
}
