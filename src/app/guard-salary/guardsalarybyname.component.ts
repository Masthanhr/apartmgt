import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GuardSalary } from '../model/guardsalary.model';
import { IGuard } from '../model/guardtrain.model';
import { GuardService } from '../service/guard.service';

@Component({
  selector: 'guardsalarybyname',
  template: `<div>
  <div class="well hoverwell thumbnail py-3 my-3">
      <div>GUARD TRAINIE NAME : {{guard?.name | titlecase}} </div>
      <div>AMOUNT : {{guard?.amount}} </div>
      <div>STATUS : {{guard?.status | titlecase}} </div>
      <div>DATE : {{guard?.date | titlecase}} </div>
  </div>
</div>`

})
export class GuardSalaryByNameComponent {

  private guard: GuardSalary;
  constructor(private guardService : GuardService, private activatedRoute: ActivatedRoute, private router: Router){
    console.log("***********")
    //this.flatdata =this.flatService.getFlatById(+activatedRoute.snapshot.params['fid']); //capture from URL and pass it to service

    this.guardService.getGuardSalaryByName(activatedRoute.snapshot.params['fname']).subscribe(f => this.guard = f);
  }


}

