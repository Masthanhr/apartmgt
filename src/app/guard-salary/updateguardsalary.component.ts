import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe } from 'rxjs';
import { GuardSalary } from '../model/guardsalary.model';
import { GuardShift } from '../model/guardshift.model';
import { IGuard } from '../model/guardtrain.model';
import { GuardService } from '../service/guard.service';



@Component({
  selector: 'updateguardsalary',
  template: `<div class="col-md-6">
 
  <form [formGroup]="newGuardForm" autocomplete="on" novalidate (ngSubmit)="updateGuardSalary(newGuardForm.value)">
        

  <div class="form-group" >
    <label for="userId">UserId: </label>
    <em *ngIf="(newGuardForm.controls.userId?.invalid) && (newGuardForm.controls.userId?.touched)">Required</em>
        <input  id="userId" required type="number" class="form-control" formControlName="userId"  [(ngModel)]=guard.userId placeholder="Enter UserId..." />
  </div>

  <div class="form-group" >
  <label for="name">name: </label>
  <em *ngIf="(newGuardForm.controls.name?.invalid) && (newGuardForm.controls.name?.touched)">Required</em>
      <input  id="name" required type="text" class="form-control" formControlName="name"  [(ngModel)]=guard.name placeholder="Enter name..." />
</div>



<div class="form-group" >
<label for="amount">Amount: </label>
<em *ngIf="(newGuardForm.controls.amount?.invalid) && (newGuardForm.controls.amount?.touched)">Required</em>
    <input  id="amount" required type="text" class="form-control" formControlName="amount"  [(ngModel)]=guard.amount placeholder="Enter amount..." />
</div>

<div class="form-group" >
<label for="status">status: </label>
<em *ngIf="(newGuardForm.controls.status?.invalid) && (newGuardForm.controls.status?.touched)">Required</em>
    <input  id="status" required type="text" class="form-control" formControlName="status"  [(ngModel)]=guard.status placeholder="Enter status..." />
</div>

<div class="form-group" >
<label for="date">date: </label>
<em *ngIf="(newGuardForm.controls.date?.invalid) && (newGuardForm.controls.date?.touched)">Required</em>
    <input  id="date" required type="text" class="form-control" formControlName="date"  [(ngModel)]=guard.date placeholder="Enter date..." />
</div>

  
  <button type="submit"  [disabled]=newGuardForm.invalid class="btn btn-primary">Update</button>
  <button type="button"   class="btn btn-primary" (click)="cancel()">Cancel</button>
  </form>
  </div>

  `,
  styles: [`em{float:right; color: #E05c65; padding-left-10px;`]
},

)


export class UpdateGuardSalaryComponent implements OnInit {
  newGuardForm: FormGroup;
 
  fid : number;
  guard:GuardSalary;

  constructor(private router: Router, private guardService: GuardService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
   this.guardService.getGuardSalaryById(this.activatedRoute.snapshot.params['fid']).subscribe(guarddata => this.guard = guarddata);

    // console.log(vehiclename)
    // this.vehicleService.deleteVehicle(vehiclename).subscribe(data => console.log(data));
    // this.router.navigate(['/co(urses']);

    this.newGuardForm = new FormGroup
    ({
      userId : new FormControl(),
      name : new FormControl(),
      amount:new FormControl(),
      status : new FormControl(),
      date: new FormControl(),

    });
  }

  updateGuardSalary(guard){
    console.log("*********");
       this.guardService.updateGuardSalary(this.guard).subscribe(pipe());
       this.router.navigate(['/GuardSalary']);
  }
}

