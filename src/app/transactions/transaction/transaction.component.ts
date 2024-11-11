import { Component, OnInit } from '@angular/core';

import { Transaction } from '../transaction.model';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransactionComponent  implements OnInit{

  transactions!: Transaction[]

  private prevDate: string = ''

  constructor(public transactionService: TransactionService) {}

  ngOnInit() {
    this.transactions = this.transactionService.getTransactions();
  }

  checkDate(transaction: Transaction) {
    if (this.prevDate !== transaction.date) {
      this.prevDate = transaction.date;
      return true;
    } else {
      return false;
    }
  }

  formatCur(value: number) {
    const locale = navigator.language;
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'INR',
    }).format(value);
}
}
