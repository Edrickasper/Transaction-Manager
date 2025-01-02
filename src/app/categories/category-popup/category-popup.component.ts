import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Category } from '../../models/category.model';

@Component({
  selector: 'app-category-popup',
  templateUrl: './category-popup.component.html',
  styleUrl: './category-popup.component.css',
  standalone: false,
})
export class CategoryPopupComponent implements OnInit {
  catData!: any;

  private dialogData = inject(MAT_DIALOG_DATA);
  private ref = inject(MatDialogRef<CategoryPopupComponent>);
  private fb = inject(FormBuilder);

  addCategory = this.fb.nonNullable.group({
    catName: [
      '',
      {
        validators: [Validators.required],
      },
    ],
    type: ['expense'],
    color: ['#dc2626'],
    favourite: [false],
  });

  ngOnInit() {
    this.catData = this.dialogData;
    if (this.catData.category) {
      const curCat = this.catData.category;
      this.addCategory.setValue({
        catName: curCat.name,
        type: curCat.type,
        color: curCat.color,
        favourite: curCat.favourite,
      });
    } else return;
  }

  closePopup() {
    this.ref.close();
    this.addCategory.reset();
  }

  onSubmit() {
    const form = this.addCategory.getRawValue();
    const catNameField = this.addCategory.controls.catName;

    if (catNameField.valid) {
      const newCategory = new Category(
        form.catName,
        form.type,
        form.color,
        form.favourite
      );
      this.ref.close(newCategory);
    } else {
      document.querySelector('#cat-name')?.classList.add('border-red-600');
    }
    this.addCategory.reset();
  }
}
