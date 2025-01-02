import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from '../category.service';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
  @Input() openPopup!: boolean
  @Output() closePopup = new EventEmitter<boolean>()

  fb = inject(FormBuilder)
  private catService = inject(CategoryService)

  addCategory = this.fb.nonNullable.group({
    catName: ['', {
      validators: [Validators.required]
    }],
    type: ['expense'],
    color: ['#dc2626'],
    favourite: [false]
  })

  close() {
    this.closePopup.emit()
    this.addCategory.reset()

  }

  onSubmit() {
    const form = this.addCategory.getRawValue();
    const catNameField = this.addCategory.controls.catName

    if(catNameField.valid) {
      const newCategory = new Category(form.catName, form.type, form.color, form.favourite);
      this.catService.updateCategory(newCategory);
      this.close();
    } else {
      document.querySelector('#cat-name')?.classList.add('border-red-600')
    }
  }
  
}