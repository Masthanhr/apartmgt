import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuardTrainComponent } from './guard-train/guardtrain.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AllGuardTrainComponent } from './guard-train/allguardtrain.component';
import { GuardShiftComponent } from './guard-shift/guardshift.component';
import {  AllGuardShiftComponent } from './guard-shift/allguardshift.component';
import { GuardService } from './service/guard.service';
import { GuardTrainByIdComponent } from './guard-train/guardtrainbyid.component';
import { CreateGuardTrainComponent } from './guard-train/createguardtrain.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteGuardTrainComponent } from './guard-train/deleteguardtrain.component';
import { UpdateGuardTrainComponent } from './guard-train/updateguardtrain.component';
import { GuardTrainByNameComponent } from './guard-train/guardtrainbyname.component';
import { CreateGuardShiftComponent } from './guard-shift/createguardshift.component';
import { GuardShiftByIdComponent } from './guard-shift/guardshiftbyid.component';
import { DeleteGuardShiftComponent } from './guard-shift/deleteguardshift.component';
import { UpdateGuardShiftComponent } from './guard-shift/updateguardshift.component';
import { GuardShiftByNameComponent } from './guard-shift/guardshiftbyname.component';
import { GuardSalaryComponent } from './guard-salary/guardsalary.component';
import { AllGuardSalaryComponent } from './guard-salary/allguardsalary.component';
import { CreateGuardSalaryComponent } from './guard-salary/createguardsalary.component';
import { GuardSalaryByIdComponent } from './guard-salary/guardsalarybyid.component';
import { DeleteGuardSalaryComponent } from './guard-salary/deleteguardsalary.component';
import { UpdateGuardSalaryComponent } from './guard-salary/updateguardsalary.component';
import { GuardSalaryByNameComponent } from './guard-salary/guardsalarybyname.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    GuardTrainComponent,
    AllGuardTrainComponent,
    NavbarComponent,
    GuardTrainByIdComponent,
    CreateGuardTrainComponent,
    DeleteGuardTrainComponent,
    UpdateGuardTrainComponent,
    GuardTrainByNameComponent,
    AllGuardShiftComponent,
    GuardShiftComponent,
    CreateGuardShiftComponent,
    GuardShiftByIdComponent,
    DeleteGuardShiftComponent,
    UpdateGuardShiftComponent,
    GuardShiftByNameComponent,
    GuardSalaryComponent,
    AllGuardSalaryComponent,
    CreateGuardSalaryComponent,
    GuardSalaryByIdComponent,
    DeleteGuardSalaryComponent,
    UpdateGuardSalaryComponent,
    GuardSalaryByNameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
