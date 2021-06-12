import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IGuard } from '../model/guardtrain.model';
import { GuardService } from '../service/guard.service';

@Component({
  selector: 'guardtrainbyid',
  template: `
  <div *ngIf="errorMessage" class="alert alert-danger">
  {{errorMessage?.error?.error | json}}
  </div>

  <div>
  <div *ngIf="guard" class="well hoverwell thumbnail py-3 my-3">
      <div > USER ID : {{guard?.userId}} </div>
      <div>GUARD TRAINIE NAME : {{guard?.name | titlecase}} </div>
      <div>DATE : {{guard?.date | titlecase}} </div>
      <div>MOBILE NO : {{guard?.mobileNo | titlecase}} </div>
      <div>STATUS : {{guard?.status | titlecase}} </div>
      <div>TIMEING : {{guard?.timeing | titlecase}} </div>

      <div class="row">
      <div class="col-md-1">
      <button class="btn btn-primary" title="delete GuardTrain"  [routerLink]="['/GuardTraining/delete',guard?.userId]">Delete</button>
      
      </div> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <div class="col-md-1">
      <button class="btn btn-primary" title="update GuardTrain" (click)="updateGuardTrain(guard.userId)">Update</button>
      </div>
  </div>
</div>`

})
export class GuardTrainByIdComponent {

  private guard: IGuard;
  private delete: any;
  private errorMessage;



  constructor(private guardService : GuardService, private activatedRoute: ActivatedRoute, private router: Router){
    console.log("***********")
    //this.flatdata =this.flatService.getFlatById(+activatedRoute.snapshot.params['fid']); //capture from URL and pass it to service

    this.guardService.getGuardtrainById(+activatedRoute.snapshot.params['fid']).subscribe(f => this.guard = f,(error) => {this.errorMessage = error});
  }

  updateGuardTrain(fid){
    this.router.navigateByUrl("/GuardTraining/update/"+fid)
}


}


