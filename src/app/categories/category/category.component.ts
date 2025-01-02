import { AfterContentChecked, Component, inject, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit, AfterContentChecked {
  private catService = inject(CategoryService)

  categories!: Category[]

  ngOnInit() {
    this.categories = this.catService.getCategory();
  }
  
  ngAfterContentChecked(): void {
    this.categories = this.catService.getCategory();
  }
}
