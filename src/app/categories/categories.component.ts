import { Component, inject } from '@angular/core';
import { Category } from '../models/category.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { CategoryPopupComponent } from './category-popup/category-popup.component';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
  standalone: false,
})
export class CategoriesComponent {
  categories!: Category[];

  private dialog = inject(MatDialog);
  private catService = inject(CategoryService);

  openPopup() {
    const popup = this.dialog.open(CategoryPopupComponent, {
      disableClose: true,
      width: '60%',
      height: 'auto',
      data: {
        title: 'Add Category',
      },
    });
    popup.afterClosed().subscribe((category: Category) => {
      if (category) this.catService.addCategory(category);
      else return;
    });
  }
}
