import { AfterContentChecked, Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
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
  addCategory: boolean = false

  ngOnInit() {
    this.categories = this.catService.getCategory();
  }
  
  ngAfterContentChecked(): void {
    this.categories = this.catService.getCategory();
  }
}
