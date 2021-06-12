import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GuardService } from '../service/guard.service';
import { IGuard } from '../model/guardtrain.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'createguardtrain',
  template: `
  <div  class = "container" style="width:550px"> 
        <div style="text-align:center;">
          <h3><b>New GuardTraining Registration</b></h3>
        </div>
    
    <form [formGroup]="newGuardTrainForm" autocomplete="on" novalidate (ngSubmit)="addGuardTrain(newGuardTrainForm.value)">
        

        <div class="form-group" >
          <label for="userId">User Id:</label>
          <em *ngIf="(newGuardTrainForm.controls.userId?.invalid) && (newGuardTrainForm.controls.userId?.touched)">Required</em>
              <input  id="userId" required type="text" class="form-control" formControlName="userId"  (ngModel)=guardTrain.userId placeholder="Enter User Id..." />
        </div>
      
        <div class="form-group" >
          <label for="name">Name:</label>
          <em *ngIf="(newGuardTrainForm.controls.name?.invalid) && (newGuardTrainForm.controls.name?.touched)">Required</em>
              <input  id="name" required type="text"   class="form-control" formControlName="name"  (ngModel)=guardTrain.name placeholder="Enter Guard Name..." />
        </div>

        <div class="form-group" >
          <label for="date">Date:</label>
          <em *ngIf="(newGuardTrainForm.controls.date?.invalid) && (newGuardTrainForm.controls.date?.touched)">Required</em>
              <input  id="date" required type="string"   class="form-control" formControlName="date"  (ngModel)=guardTrain.date placeholder="Enter Date..." />
        </div>

        <div class="form-group" >
          <label for="mobileNo">mobileNo:</label>
        <em *ngIf="newGuardTrainForm.controls.mobileNo?.invalid && (newGuardTrainForm.controls.mobileNo?.touched)">Required</em>
        <input  id="mobileNo"  required type="text" class="form-control" formControlName="mobileNo" (ngModel)=guardTrain.mobileNo placeholder="Enter Mobile No..." />
      </div>

        

        <div class="form-group" >
          <label for="status">Status:</label>
          <em *ngIf="newGuardTrainForm.controls.status?.invalid && (newGuardTrainForm.controls.status?.touched)">Required</em>
          <input  id="status"  required type="text" class="form-control" formControlName="status" (ngModel)=guardTrain.status placeholder="EnterStatus..." />
        </div>

        <div class="form-group" >
        <label for="timeing">timeing:</label>
        <em *ngIf="newGuardTrainForm.controls.timeing?.invalid && (newGuardTrainForm.controls.timeing?.touched)">Required</em>
        <input  id="timeing"  required type="text" class="form-control" formControlName="timeing" (ngModel)=guardTrain.timeing placeholder="Enter Timeing..." />
      </div>

        
        <button type="submit"  [disabled]=newGuardTrainForm.invalid class="btn btn-primary">Save</button>
        <button type="button"   class="btn btn-primary" (click)="cancel()">Cancel</button>
    </form>
  <div>`,
  styles: ['em{float:right; color: #E05c65; padding-left-10px;}']
}
)
export class CreateGuardTrainComponent {
  newGuardTrainForm: FormGroup;

  
  guardTrain: IGuard = new IGuard(0,"","","","","");
  constructor(private router: Router, private guardService:  GuardService) {
  }

  addGuardTrain(newGuardTrain) {
    this.guardService.addGuardTrain(newGuardTrain).subscribe(guard => this.guardTrain = guard);
    this.router.navigate(['/GuardTraining'])
    console.log(newGuardTrain)
  }

  ngOnInit(){

    console.log("** create flat **")

    this.newGuardTrainForm = new FormGroup
    ({
          userId : new FormControl(),
          name : new FormControl(),
          date : new FormControl(),
          mobileNo : new FormControl(),
          status : new FormControl(),
          timeing: new FormControl(),

    });
    
  }

 

  cancel() {
    this.router.navigate(['/GuardTraining'])
  }

}
