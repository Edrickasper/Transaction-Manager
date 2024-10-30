import { Injectable } from "@angular/core";

import { Transaction } from "./transaction.model";

@Injectable() 

export class TransactionService {
    private transactions:Transaction[] = [
        new Transaction('Mon Oct 21 2024', 500, 'food', 'Dinner'),
        new Transaction('Mon Oct 21 2024', 5000, 'clothes', 'Diwali')
    ]
    private isDatePrinted: boolean = false

    getTransactions() {
        return this.transactions.slice();
    }

    checkDate(transaction: Transaction) {
        if (transaction.date !== new Date().toDateString()) {
            this.isDatePrinted = !this.isDatePrinted;
        }
        return this.isDatePrinted;
    }
}