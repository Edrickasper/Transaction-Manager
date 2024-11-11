import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
  @Input() openPopup!: boolean
  @Output() closePopup = new EventEmitter<boolean>()
}
