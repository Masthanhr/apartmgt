import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe } from 'rxjs';
import { IGuard } from '../model/guardtrain.model';
import { GuardService } from '../service/guard.service';



@Component({
  selector: 'updateguard',
  template: `<div class="col-md-6">
 
  <form [formGroup]="newGuardForm"  autocomplete="on" novalidate (ngSubmit)="updateGuardTrain(newGuardForm.value)">
        

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
<label for="date">date: </label>
<em *ngIf="(newGuardForm.controls.date?.invalid) && (newGuardForm.controls.date?.touched)">Required</em>
    <input  id="date" required type="date" class="form-control" formControlName="date"  [(ngModel)]=guard.date placeholder="Enter date..." />
</div>

<div class="form-group" >
<label for="mobileNo">mobileNo: </label>
<em *ngIf="(newGuardForm.controls.mobileNo?.invalid) && (newGuardForm.controls.mobileNo?.touched)">Required</em>
    <input  id="mobileNo" required type="text" class="form-control" formControlName="mobileNo"  [(ngModel)]=guard.mobileNo placeholder="Enter mobileNo..." />
</div>

<div class="form-group" >
<label for="status">status: </label>
<em *ngIf="(newGuardForm.controls.status?.invalid) && (newGuardForm.controls.status?.touched)">Required</em>
    <input  id="status" required type="text" class="form-control" formControlName="status"  [(ngModel)]=guard.status placeholder="Enter status..." />
</div>

<div class="form-group" >
<label for="timeing">timeing: </label>
<em *ngIf="(newGuardForm.controls.timeing?.invalid) && (newGuardForm.controls.timeing?.touched)">Required</em>
    <input  id="timeing" required type="text" class="form-control" formControlName="timeing"  [(ngModel)]=guard.timeing placeholder="Enter timeing..." />
</div>

  
  <button type="submit"  [disabled]=newGuardForm.invalid class="btn btn-primary">Update</button>
  <button type="button"   class="btn btn-primary" (click)="cancel()">Cancel</button>
  </form>
  </div>

  `,
  styles: [`em{float:right; color: #E05c65; padding-left-10px;`]
},

)


export class UpdateGuardTrainComponent implements OnInit {

  newGuardForm: FormGroup;
 
  fid : number;
  guard: IGuard;

  constructor(private router: Router, private guardService: GuardService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
   this.guardService.getGuardtrainById(this.activatedRoute.snapshot.params['fid']).subscribe(guarddata => this.guard = guarddata);

    // console.log(vehiclename)
    // this.vehicleService.deleteVehicle(vehiclename).subscribe(data => console.log(data));
    // this.router.navigate(['/co(urses']);

    this.newGuardForm = new FormGroup
    ({
          userId : new FormControl,
          name : new FormControl(),
          date : new FormControl(),
          mobileNo : new FormControl(),
          status : new FormControl(),
          timeing: new FormControl(),

    });
  }

  updateGuardTrain(guard){
    console.log("*********");
       this.guardService.updateGuardTrain(this.guard).subscribe(pipe());
       this.router.navigate(['/GuardTraining']);
  }

  
}

