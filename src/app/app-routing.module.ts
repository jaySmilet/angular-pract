import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MultiStepComponent } from './multi-step/multi-step.component';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { NgTempComponent } from './ng-temp/ng-temp.component';
import { TempRefComponent } from './temp-ref/temp-ref.component';
import { ViewCComponent } from './view-c/view-c.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'clist',
    component: CustomerListComponent,
  },
  {
    path: 'mstep',
    component: MultiStepComponent,
  },
  {
    path: 'dytable',
    component: DynamicTableComponent,
  },
  {
    path: 'temp-ref',
    component: TempRefComponent,
  },
  {
    path: 'ng-c',
    component: NgContainerComponent,
  },
  {
    path: 'ng-t',
    component: NgTempComponent,
  },
  {
    path: 'v-c',
    component: ViewCComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
