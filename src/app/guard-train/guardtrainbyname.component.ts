import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IGuard } from '../model/guardtrain.model';
import { GuardService } from '../service/guard.service';

@Component({
  selector: 'guardtrainbyname',
  template: `
  <div *ngIf="errorMessage" class="alert alert-danger">
  {{errorMessage?.error?.error | json}}
  </div>
  
  <div>
  <div *ngIf="guard" class="well hoverwell thumbnail py-3 my-3">
      <div>GUARD TRAINIE NAME : {{guard?.name | titlecase}} </div>
      <div>DATE : {{guard?.date | titlecase}} </div>
      <div>MOBILE NO : {{guard?.mobileNo | titlecase}} </div>
      <div>STATUS : {{guard?.status | titlecase}} </div>
      <div>TIMEING : {{guard?.timeing | titlecase}} </div>


  </div>
</div>`

})
export class GuardTrainByNameComponent {
  private errorMessage;

  private guard: IGuard;
  constructor(private guardService : GuardService, private activatedRoute: ActivatedRoute, private router: Router){
    console.log("***********")
    //this.flatdata =this.flatService.getFlatById(+activatedRoute.snapshot.params['fid']); //capture from URL and pass it to service

    this.guardService.getGuardtrainByName(activatedRoute.snapshot.params['fname']).subscribe(f => this.guard = f,(error) => {this.errorMessage = error});
  }


}

