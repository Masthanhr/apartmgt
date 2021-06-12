import { Component,Input,Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'allguardshift',
  template:`<div>
  <div class="well hoverwell thumbnail py-3 my-3">
      <div> USER ID : {{guarddata?.userId}} </div>
      <div>  NAME : {{guarddata?.name | titlecase}} </div>
      <div>TIME : {{guarddata?.time | titlecase}} </div>
      <div>DATE : {{guarddata?.date | titlecase}} </div>
      <div>
          <span> <button [class]=buttonStyle (click)="onButtonClick()" [routerLink]="['/GuardShift/userId',guarddata.userId]"> View By Id</button></span>
      </div>

      <div>
      <span> <button [class]=buttonStyle (click)="onButtonClick()" [routerLink]="['/GuardShift/name',guarddata.name]"> View By Name</button></span>
  </div>
  </div>
</div>`,
})
export class AllGuardShiftComponent {
  @Input() guarddata;  // property receiving the data from parent using property binding
  // We can create custom event 
   @Output() customEvent =  new EventEmitter(); //   (customEvent) = "someFunction"
 
   isDisabled = true ;  
   buttonStyle = "btn btn-primary";
    
   public i:number=10;

   myFunction(){
     this.isDisabled = false
     this.buttonStyle = "btn btn-success";
   }

 
   onButtonClick(){
     this.customEvent.emit(this.guarddata);  // what ever is send  by default get stored into one javascript '$event'
   }

  

}
