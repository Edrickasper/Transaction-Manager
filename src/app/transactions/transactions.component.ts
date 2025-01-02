import { Component, inject } from '@angular/core';

import { Transaction } from '../models/transaction.model';
import { TransactionService } from './transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent {
  addTransaction: boolean = false

  private transactionService = inject(TransactionService)

  public today = new Date().toString();
}
