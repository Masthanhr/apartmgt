import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IGuard } from "../model/guardtrain.model";
import { HttpClient , HttpHeaders} from "@angular/common/http";
import { GuardShift } from "../model/guardshift.model";
import { GuardSalary } from "../model/guardsalary.model";


@Injectable()
export class GuardService
{
  private url : string = "http://localhost:9997/GuardTraining";
  private url1 : string = "http://localhost:9997/GuardShift";
  private url2 : string = "http://localhost:9997/GuardSalary";

  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient :HttpClient){

  }



    public getGuardtrainById(fid: number): Observable<IGuard> {
      //return flats.find(flat => flat.userId === fid);
      
      const url =  `${this.url}/userId/${fid}`;
      return this.httpClient.get<IGuard>(url);     
  }

    public DeleteGuard(fid: number): Observable<IGuard> {
      //return flats.find(flat => flat.userId === fid);
      
      const url =  `${this.url}/delete/${fid}`;
      return this.httpClient.delete<IGuard>(url);     
  }

  public addGuardTrain(newFlat):Observable<IGuard> {
    return this.httpClient.post<IGuard>(this.url, newFlat, this.httpOptions);
  }

  public getAllGuardTrain(): Observable<IGuard[]>{
    // return flats;
    //Observable receive the data sources processing 
    //let obs:Observable<cflat[]> = this.httpClient.get<cflat[]>(this.url);
    //return obs.subscribe(data );
    return this.httpClient.get<IGuard[]>(this.url);
 }

 
 public updateGuardTrain(newGuard): Observable<IGuard> {
  const url =  `${this.url}/update`;
  return this.httpClient.put<IGuard>(url, newGuard, this.httpOptions);
}

public getGuardtrainByName(fname: String): Observable<IGuard> {
  //return flats.find(flat => flat.userId === fid);
  
  const url =  `${this.url}/name/${fname}`;
  return this.httpClient.get<IGuard>(url);     
}



public getAllGuardShift(): Observable<GuardShift[]>{
  // return flats;
  //Observable receive the data sources processing 
  //let obs:Observable<cflat[]> = this.httpClient.get<cflat[]>(this.url);
  //return obs.subscribe(data );
  return this.httpClient.get<GuardShift[]>(this.url1);
}



public addGuardShift(newGuardShift):Observable<GuardShift> {
  return this.httpClient.post<GuardShift>(this.url1,newGuardShift, this.httpOptions);
}

public getGuardShiftById(fid: number): Observable<GuardShift> {
  //return flats.find(flat => flat.userId === fid);
  
  const url =  `${this.url1}/userId/${fid}`;
  return this.httpClient.get<GuardShift>(url);     
}


public DeleteGuardShift(fid: number): Observable<GuardShift> {
  //return flats.find(flat => flat.userId === fid);
  
  const url =  `${this.url1}/delete/${fid}`;
  return this.httpClient.delete<GuardShift>(url);     
}

 
public updateGuardShift(newGuard): Observable<GuardShift> {
  const url =  `${this.url1}/update`;
  return this.httpClient.put<GuardShift>(url, newGuard, this.httpOptions);
}

public getGuardShiftByName(fname: String): Observable<GuardShift> {
  //return flats.find(flat => flat.userId === fid);
  
  const url =  `${this.url1}/name/${fname}`;
  return this.httpClient.get<GuardShift>(url);     
}


public getAllGuardSalary(): Observable<GuardSalary[]>{
  // return flats;
  //Observable receive the data sources processing 
  //let obs:Observable<cflat[]> = this.httpClient.get<cflat[]>(this.url);
  //return obs.subscribe(data );
  return this.httpClient.get<GuardSalary[]>(this.url2);
}



public addGuardSalary(newFlat):Observable<GuardSalary> {
  return this.httpClient.post<GuardSalary>(this.url2, newFlat, this.httpOptions);
}


public getGuardSalaryById(fid: number): Observable<GuardSalary> {
  //return flats.find(flat => flat.userId === fid);
  
  const url =  `${this.url2}/userId/${fid}`;
  return this.httpClient.get<GuardSalary>(url);     
}



public DeleteGuardSalary(fid: number): Observable<GuardSalary> {
  //return flats.find(flat => flat.userId === fid);
  
  const url =  `${this.url2}/delete/${fid}`;
  return this.httpClient.delete<GuardSalary>(url);     
}


public updateGuardSalary(newGuard): Observable<GuardSalary> {
  const url =  `${this.url2}/update`;
  return this.httpClient.put<GuardSalary>(url, newGuard, this.httpOptions);
}

public getGuardSalaryByName(fname: String): Observable<GuardSalary> {
  //return flats.find(flat => flat.userId === fid);
  
  const url =  `${this.url2}/name/${fname}`;
  return this.httpClient.get<GuardSalary>(url);     
}


}



function tap(arg0: (data: any) => void): import("rxjs").OperatorFunction<IGuard, IGuard> {
  throw new Error("Function not implemented.");
}
// const guards : IGuard[] = [
//     {
//       "userId":55,
//       "name": "mas",
//       "date": "2020-01-01",
//       "mobileNo": "9876543",
//       "status":"1",
//       "timeing":"10AM",
//     },
//     {
//       "userId":55,
//       "name": "mas",
//       "date": "2020-01-01",
//       "mobileNo": "9876543",
//       "status":"1",
//       "timeing":"10AM",
//     },
//     {
//       "userId":55,
//       "name": "mas",
//       "date": "2020-01-01",
//       "mobileNo": "9876543",
//       "status":"1",
//       "timeing":"10AM",
//     },
//     {
//       "userId":55,
//       "name": "mas",
//       "date": "2020-01-01",
//       "mobileNo": "9876543",
//       "status":"1",
//       "timeing":"10AM",
//     },
//     {
//       "userId":55,
//       "name": "mas",
//       "date": "2020-01-01",
//       "mobileNo": "9876543",
//       "status":"1",
//       "timeing":"10AM",
//     },

//     {
//       "userId":55,
//       "name": "mas",
//       "date": "2020-01-01",
//       "mobileNo": "9876543",
//       "status":"1",
//       "timeing":"10AM",
//     },
//   ]