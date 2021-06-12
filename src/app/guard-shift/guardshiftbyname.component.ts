import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GuardShift } from '../model/guardshift.model';
import { IGuard } from '../model/guardtrain.model';
import { GuardService } from '../service/guard.service';

@Component({
  selector: 'guardshiftbyname',
  template: `
  <div *ngIf="errorMessage" class="alert alert-danger">
  {{errorMessage?.error?.error | json}}
  </div>
  <div>
  <div *ngIf="guardshift" class="well hoverwell thumbnail py-3 my-3">
      <div>NAME : {{guardshift?.name | titlecase}} </div>
      <div>TIME : {{guardshift?.time | titlecase}} </div>
      <div>DATE : {{guardshift?.date | titlecase}} </div>


  </div>
</div>`

})
export class GuardShiftByNameComponent {
  private errorMessage;

  private guardshift: GuardShift;
  constructor(private guardService : GuardService, private activatedRoute: ActivatedRoute, private router: Router){
    console.log("***********")
    //this.flatdata =this.flatService.getFlatById(+activatedRoute.snapshot.params['fid']); //capture from URL and pass it to service

    this.guardService.getGuardShiftByName(activatedRoute.snapshot.params['fname']).subscribe(f => this.guardshift = f,(error) => {this.errorMessage = error});
  }


}

