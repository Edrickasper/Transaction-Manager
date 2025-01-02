import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrl: './add-transaction.component.css'
})
export class AddTransactionComponent {
  @Input() openPopup!: boolean
  @Output() closePopup = new EventEmitter<boolean>()

  fb = inject(FormBuilder)

  addTransaction = this.fb.nonNullable.group({
    
  })

  onSubmit() {

  }
}
