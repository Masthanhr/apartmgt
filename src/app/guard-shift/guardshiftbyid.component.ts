import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GuardShift } from '../model/guardshift.model';
import { GuardService } from '../service/guard.service';

@Component({
  selector: 'guardshiftbyid',
  template: `
  <div *ngIf="errorMessage" class="alert alert-danger">
  {{errorMessage?.error?.error | json}}
  </div>

  <div>
  <div *ngIf="guardShift" class="well hoverwell thumbnail py-3 my-3">
      <div > USER ID : {{guardShift?.userId}} </div>
      <div>GUARD TRAINIE NAME : {{guardShift?.name | titlecase}} </div>
      <div>TIME : {{guardShift?.time | titlecase}} </div>
      <div>DATE : {{guardShift?.date | titlecase}} </div>

      <div class="row">
      <div class="col-md-1">
      <button class="btn btn-primary" title="delete Shift"  [routerLink]="['/GuardShift/delete',guardShift?.userId]">Delete</button>
      
      </div> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <div class="col-md-1">
      <button class="btn btn-primary" title="updateShift" (click)="updateGuardShift(guardShift.userId)">Update</button>
      </div>
  </div>
</div>`

})
export class GuardShiftByIdComponent {
  private errorMessage;

  private guardShift: GuardShift;
  private delete: any;


  constructor(private guardService : GuardService, private activatedRoute: ActivatedRoute, private router: Router){
    console.log("***********")
    //this.flatdata =this.flatService.getFlatById(+activatedRoute.snapshot.params['fid']); //capture from URL and pass it to service

    this.guardService.getGuardShiftById(+activatedRoute.snapshot.params['fid']).subscribe(f => this.guardShift = f,(error) => {this.errorMessage = error});
  }

  updateGuardShift(fid){
    this.router.navigateByUrl("/GuardShift/update/"+fid)
}



}

