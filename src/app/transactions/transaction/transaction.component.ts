import { Component, Input } from '@angular/core';

import { Transaction } from '../transaction.model';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransactionComponent {
  @Input() transaction!: Transaction

  constructor(public transactionService: TransactionService) {}

}
