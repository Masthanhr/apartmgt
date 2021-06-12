import { Component, OnInit } from '@angular/core';
import { IGuard } from '../model/guardtrain.model';
import { GuardService } from '../service/guard.service';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'guardtrain',
  template: `<div >
                <h1>Guard Training Details</h1>
                <hr/>
                <div  class= "row row-cols-2">
                <div  *ngFor="let guards of guards | paginate: {itemsPerPage: 5,currentPage:p}"  class="col-md-4">  
                        <allguardtrain #allguards [guarddata] = guards  (customEvent)="parentFunction($event)" ></allguardtrain>
                        <!-- <div>
                        {{allguards.i}}
                        {{allguards.testmyFunction()}}
                        </div> 
                        -->

                  </div>
              </div>
              <pagination-controls (pageChange)="p=$event"></pagination-controls>`

})
export class GuardTrainComponent {
  p:number=1;


  //private guardService:GuardService;
  private guards:IGuard[];
  //private guardService:GuardService


  constructor(private guardService:GuardService )         //Dependency injection
  {
    //this.guardService=new GuardService;
    this.guardService.getAllGuardTrain().subscribe(guarddata => this.guards = guarddata);
  } 




  parentFunction(event) {
    console.log(event);
  }


}

function ngOnInit() {
  throw new Error('Function not implemented.');
} 

