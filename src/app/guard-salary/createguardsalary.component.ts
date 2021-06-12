import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GuardService } from '../service/guard.service';
import { IGuard } from '../model/guardtrain.model';
import { GuardSalary } from '../model/guardsalary.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'createguardsalary',
  template: `
  <div  class = "container" style="width:550px"> 
        <div style="text-align:center;">
          <h3><b>New GuardSalary Registration</b></h3>
        </div>
    
    <form [formGroup]="newGuardSalaryForm" autocomplete="on" novalidate (ngSubmit)="addGuardSalary(newGuardSalaryForm.value)">
        

        <div class="form-group" >
          <label for="userId">User Id:</label>
          <em *ngIf="(newGuardSalaryForm.controls.userId?.invalid) && (newGuardSalaryForm.controls.userId?.touched)">Required</em>
              <input  id="userId" required type="text" class="form-control" formControlName="userId"  (ngModel)=guardSalary.userId placeholder="Enter User Id..." />
        </div>
      
        <div class="form-group" >
          <label for="name">Name:</label>
          <em *ngIf="(newGuardSalaryForm.controls.name?.invalid) && (newGuardSalaryForm.controls.name?.touched)">Required</em>
              <input  id="name" required type="text"   class="form-control" formControlName="name"  (ngModel)=guardSalary.name placeholder="Enter Guard Name..." />
        </div>

        <div class="form-group" >
          <label for="amount">Amount:</label>
          <em *ngIf="(newGuardSalaryForm.controls.amount?.invalid) && (newGuardSalaryForm.controls.amount?.touched)">Required</em>
              <input  id="amount" required type="number"   class="form-control" formControlName="amount"  (ngModel)=guardSalary.amount placeholder="Enter Amount..." />
        </div>

        <div class="form-group" >
          <label for="status">status:</label>
        <em *ngIf="newGuardSalaryForm.controls.status?.invalid && (newGuardSalaryForm.controls.status?.touched)">Required</em>
        <input  id="status"  required type="text" class="form-control" formControlName="status" (ngModel)=guardSalary.mobileNo placeholder="Enter status..." />
      </div>

        

        <div class="form-group" >
          <label for="date">date:</label>
          <em *ngIf="newGuardSalaryForm.controls.date?.invalid && (newGuardSalaryForm.controls.date?.touched)">Required</em>
          <input  id="date"  required type="text" class="form-control" formControlName="date" (ngModel)=guardSalary.date placeholder="Enter date..." />
        </div>

        
        <button type="submit"  [disabled]=newGuardSalaryForm.invalid class="btn btn-primary">Save</button>
        <button type="button"   class="btn btn-primary" (click)="cancel()">Cancel</button>
    </form>
  <div>`,
  styles: ['em{float:right; color: #E05c65; padding-left-10px;}']
}
)
export class CreateGuardSalaryComponent {
  newGuardSalaryForm: FormGroup;

  
  guardSalary: GuardSalary = new IGuard(0,"","","","","");
  constructor(private router: Router, private guardService:  GuardService) {
  }

  addGuardSalary(newGuardSalary) {
    this.guardService.addGuardSalary(newGuardSalary).subscribe(guard => this.guardSalary = guard);
    this.router.navigate(['/GuardSalary'])
    console.log(newGuardSalary)
  }

  
  ngOnInit(){

    console.log("** create flat **")

    this.newGuardSalaryForm = new FormGroup
    ({
          userId : new FormControl(),
          name : new FormControl(),
          amount:new FormControl(),
          status : new FormControl(),
          date: new FormControl(),
    });
    
  }

 

  cancel() {
    this.router.navigate(['/GuardSalary'])
  }

}
