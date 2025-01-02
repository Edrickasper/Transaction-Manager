import {
  AfterContentChecked,
  Component,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CategoryService } from '../category.service';
import { Category } from '../../models/category.model';
import { CategoryPopupComponent } from '../category-popup/category-popup.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
  standalone: false,
})
export class CategoryComponent implements OnInit, AfterContentChecked {
  private catService = inject(CategoryService);
  private dialog = inject(MatDialog);

  categories!: Category[];

  ngOnInit() {
    this.categories = this.catService.getCategory();
  }

  ngAfterContentChecked(): void {
    this.categories = this.catService.getCategory();
  }

  openPopup(category: Category) {
    const curCat = category;
    const popup = this.dialog.open(CategoryPopupComponent, {
      disableClose: true,
      width: '60%',
      height: 'auto',
      data: {
        title: 'Edit Category',
        category: curCat,
      },
    });
    popup.afterClosed().subscribe((category: Category) => {
      this.catService.editCategory(category);
    });
  }
}
