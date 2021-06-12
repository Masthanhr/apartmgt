import { Component, OnInit } from '@angular/core';
import { GuardService } from '../service/guard.service';
import { observable, Observable } from 'rxjs';
import { GuardShift } from '../model/guardshift.model';

@Component({
  selector: 'guardshift',
  template: `<div >
                <h1>Guard Shift Details</h1>
                <hr/>
                <div  class= "row row-cols-2">
                <div  *ngFor="let guards of guards  | paginate: {itemsPerPage: 5,currentPage:p}" class="col-md-4">  
                        <allguardshift #allguards [guarddata] = guards  (customEvent)="parentFunction($event)" ></allguardshift>
                        <!-- <div>
                        {{allguards.i}}
                        {{allguards.testmyFunction()}}
                        </div> 
                        -->

                  </div>
              </div>
              <pagination-controls (pageChange)="p=$event"></pagination-controls>`

})
export class GuardShiftComponent {
  p:number=1;


  //private guardService:GuardService;
  private guards:GuardShift[];
  //private guardService:GuardService


  constructor(private guardService:GuardService )         //Dependency injection
  {
    //this.guardService=new GuardService;
    this.guardService.getAllGuardShift().subscribe(guarddata => this.guards = guarddata);
  } 




  parentFunction(event) {
    console.log(event);
  }


}

function ngOnInit() {
  throw new Error('Function not implemented.');
} 

