import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GuardTrainComponent} from './guard-train/guardtrain.component'
import {CreateGuardTrainComponent} from './guard-train/createguardtrain.component'
import { GuardTrainByIdComponent } from './guard-train/guardtrainbyid.component';
import { GuardTrainIdRouteGuardCheckService } from './service/guardtrainroute.service';
import { DeleteGuardTrainComponent } from './guard-train/deleteguardtrain.component';
import { UpdateGuardTrainComponent } from './guard-train/updateguardtrain.component';
import { GuardTrainByNameComponent } from './guard-train/guardtrainbyname.component';
import { GuardShiftComponent } from './guard-shift/guardshift.component';
import { CreateGuardShiftComponent } from './guard-shift/createguardshift.component';
import { GuardShiftByIdComponent } from './guard-shift/guardshiftbyid.component';
import { DeleteGuardShiftComponent } from './guard-shift/deleteguardshift.component';
import { UpdateGuardShiftComponent } from './guard-shift/updateguardshift.component';
import { GuardShiftByNameComponent } from './guard-shift/guardshiftbyname.component';
import { GuardSalaryComponent } from './guard-salary/guardsalary.component';
import { CreateGuardSalaryComponent } from './guard-salary/createguardsalary.component';
import { GuardSalaryByIdComponent } from './guard-salary/guardsalarybyid.component';
import { DeleteGuardSalaryComponent } from './guard-salary/deleteguardsalary.component';
import { UpdateGuardSalaryComponent } from './guard-salary/updateguardsalary.component';
import { GuardSalaryByNameComponent } from './guard-salary/guardsalarybyname.component';


const routes: Routes = [
  {path:"GuardTraining",component:GuardTrainComponent},
  {path:"GuardTraining/userId/:fid",component:GuardTrainByIdComponent},
  {path:"GuardTraining/delete/:fid",component:DeleteGuardTrainComponent},
  {path:"GuardTraining/update/:fid",component:UpdateGuardTrainComponent},
  {path:"GuardTraining/new",component:CreateGuardTrainComponent},
  {path:"GuardTraining/name/:fname",component:GuardTrainByNameComponent},
  {path:"GuardShift",component:GuardShiftComponent},
  {path:"GuardShift/new",component:CreateGuardShiftComponent},
  {path:"GuardShift/userId/:fid",component:GuardShiftByIdComponent},
  {path:"GuardShift/delete/:fid",component:DeleteGuardShiftComponent},
  {path:"GuardShift/update/:fid",component:UpdateGuardShiftComponent},
  {path:"GuardShift/name/:fname",component:GuardShiftByNameComponent},
  {path:"GuardSalary",component:GuardSalaryComponent},
  {path:"GuardSalary/new",component:CreateGuardSalaryComponent},
  {path:"GuardSalary/userId/:fid",component:GuardSalaryByIdComponent},
  {path:"GuardSalary/delete/:fid",component:DeleteGuardSalaryComponent},
  {path:"GuardSalary/new",component:CreateGuardSalaryComponent},
  {path:"GuardSalary/update/:fid",component:UpdateGuardSalaryComponent},
  {path:"GuardSalary/name/:fname",component:GuardSalaryByNameComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
