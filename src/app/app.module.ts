import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionComponent } from './transactions/transaction/transaction.component';
import { TransactionService } from './transactions/transaction.service';
import { CategoryService } from './categories/category.service';
import { AddCategoryComponent } from './categories/add-category/add-category.component';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { AuthenticationService } from './authentication/authentication.service';
import { provideHttpClient } from '@angular/common/http';
import { AddTransactionComponent } from './transactions/add-transaction/add-transaction.component';
import { CategoryComponent } from './categories/category/category.component';

const firebaseConfig = {
  apiKey: "AIzaSyAlLdQGuzevgfJiJ-32vFyeevwdAjm11_w",
  authDomain: "transaction-manager-ae91b.firebaseapp.com",
  projectId: "transaction-manager-ae91b",
  storageBucket: "transaction-manager-ae91b.firebasestorage.app",
  messagingSenderId: "918381907162",
  appId: "1:918381907162:web:e1cf8e746bdd90797429e3"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesComponent,
    TransactionsComponent,
    TransactionComponent,
    AddCategoryComponent,
    RegisterComponent,
    LoginComponent,
    AddTransactionComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    TransactionService,
    CategoryService,
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AuthenticationService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
