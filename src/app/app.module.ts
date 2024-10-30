import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './category/category.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionComponent } from './transactions/transaction/transaction.component';
import { TransactionService } from './transactions/transaction.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    TransactionsComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
