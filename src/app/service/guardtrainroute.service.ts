import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { Observable } from "rxjs";
import { GuardService } from "./guard.service";
 
@Injectable()
export class GuardTrainIdRouteGuardCheckService implements CanActivate {
 
  constructor(private guardService : GuardService , private router : Router){
 
  }
  canActivate(activatesroute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    console.log("Route guard is called")
    //activate route when true returned other wise don't activate the url
    if(!this.guardService.getGuardtrainById(+activatesroute.params['fid'])){
        this.router.navigate(['/guardnotfound'])
    }
        return true;
 
  }

}