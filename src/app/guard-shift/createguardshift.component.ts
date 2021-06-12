import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GuardService } from '../service/guard.service';
import { IGuard } from '../model/guardtrain.model';
import { GuardShift } from '../model/guardshift.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'createguardshift',
  template: `
  <div  class = "container" style="width:550px"> 
        <div style="text-align:center;">
          <h3><b>New GuardShift Registration</b></h3>
        </div>
    
    <form [formGroup]="newGuardShiftForm" autocomplete="on" novalidate (ngSubmit)="addGuardShift(newGuardShiftForm.value)">
        

        <div class="form-group" >
          <label for="userId">User Id:</label>
          <em *ngIf="(newGuardShiftForm.controls.userId?.invalid) && (newGuardShiftForm.controls.userId?.touched)">Required</em>
              <input  id="userId" required type="number" class="form-control" formControlName="userId"  (ngModel)=guardShift.userId placeholder="Enter User Id..." />
        </div>
      
        <div class="form-group" >
          <label for="name">Name:</label>
          <em *ngIf="(newGuardShiftForm.controls.name?.invalid) && (newGuardShiftForm.controls.name?.touched)">Required</em>
              <input  id="name" required type="text"   class="form-control" formControlName="name"  (ngModel)=guardShift.name placeholder="Enter Guard Name..." />
        </div>

        <div class="form-group" >
          <label for="time">Time:</label>
          <em *ngIf="(newGuardShiftForm.controls.time?.invalid) && (newGuardShiftForm.controls.time?.touched)">Required</em>
              <input  id="time" required type="text"   class="form-control" formControlName="time"  (ngModel)=guardShift.date placeholder="Enter Time..." />
        </div>

        <div class="form-group" >
          <label for="date">date:</label>
        <em *ngIf="newGuardShiftForm.controls.date?.invalid && (newGuardShiftForm.controls.date?.touched)">Required</em>
        <input  id="date"  required type="text" class="form-control" formControlName="date" (ngModel)=guardShift.date placeholder="Enter date ..." />
      </div>

        <button type="submit"  [disabled]=newGuardShiftForm.invalid class="btn btn-primary">Save</button>
        <button type="button"   class="btn btn-primary" (click)="cancel()">Cancel</button>
    </form>
  <div>`,
  styles: ['em{float:right; color: #E05c65; padding-left-10px;}']
}
)
export class CreateGuardShiftComponent {
  newGuardShiftForm: FormGroup;

  
  guardShift: GuardShift = new GuardShift(0,"","","");
  constructor(private router: Router, private guardService:  GuardService) {
  }

  addGuardShift(newGuardShift) {
    this.guardService.addGuardShift(newGuardShift).subscribe(guard => this.guardShift = guard);
    this.router.navigate(['/GuardShift'])
    console.log(newGuardShift)
  }

  ngOnInit(){

    console.log("** create flat **")

    this.newGuardShiftForm = new FormGroup
    ({
          userId : new FormControl(),
          name : new FormControl(),
          time: new FormControl(),
          date: new FormControl(),
    });
    
  }

 

  cancel() {
    this.router.navigate(['/GuardShift'])
  }

}
