import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GuardSalary } from '../model/guardsalary.model';
import { GuardService } from '../service/guard.service';

@Component({
  selector: 'guardsalarybyid',
  template: `
  <div *ngIf="errorMessage" class="alert alert-danger">
  {{errorMessage?.error?.error | json}}
  </div>

  <div>
  <div *ngIf="guard" class="well hoverwell thumbnail py-3 my-3">
      <div > USER ID : {{guard?.userId}} </div>
      <div>GUARD TRAINIE NAME : {{guard?.name | titlecase}} </div>
      <div>AMOUNT : {{guard?.amount}}</div>
      <div>STATUS : {{guard?.status | titlecase}} </div>
      <div>DATE : {{guard?.date }} </div>

      <div class="row">
      <div class="col-md-1">
      <button class="btn btn-primary" title="delete GuardSalary"  [routerLink]="['/GuardSalary/delete',guard?.userId]">Delete</button>
      
      </div> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <div class="col-md-1">
      <button class="btn btn-primary" title="update GuardSalary" (click)="updateGuardSalary(guard.userId)">Update</button>
      </div>
  </div>
</div>`

})
export class GuardSalaryByIdComponent {
  private errorMessage;

  private guard: GuardSalary;
  private delete: any;


  constructor(private guardService : GuardService, private activatedRoute: ActivatedRoute, private router: Router){
    console.log("***********")
    //this.flatdata =this.flatService.getFlatById(+activatedRoute.snapshot.params['fid']); //capture from URL and pass it to service

    this.guardService.getGuardSalaryById(+activatedRoute.snapshot.params['fid']).subscribe(f => this.guard = f,(error) => {this.errorMessage = error});
  }

  updateGuardSalary(fid){
    this.router.navigateByUrl("/GuardSalary/update/"+fid)
}



}

