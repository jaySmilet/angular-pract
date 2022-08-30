import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { BtnComponent } from './btn/btn.component';
import { FancyBtnComponent } from './fancy-btn/fancy-btn.component';
import { CardComponent } from './card/card.component';
import { LoginComponent } from './login/login.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-list/customer-detail/customer-detail.component';
import { MultiStepComponent } from './multi-step/multi-step.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { TempRefComponent } from './temp-ref/temp-ref.component';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { NgTempComponent } from './ng-temp/ng-temp.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HomeComponent,
    BtnComponent,
    FancyBtnComponent,
    CardComponent,
    LoginComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    MultiStepComponent,
    DynamicTableComponent,
    TempRefComponent,
    NgContainerComponent,
    NgTempComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}