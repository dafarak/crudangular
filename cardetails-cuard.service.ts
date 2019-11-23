import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { cardetails } from './pages/classes/cardetails';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CardetailsCuardService {
  formdata:cardetails;
  
   readonly url = "http://localhost:3000/carwash"
  //  httpOptions= { 
  //   headers: new HttpHeaders({
  //    'Content-Type':'application/json',
  //    'Authorization':'my-auth-token'
  //   })
  // };
  
  constructor(private http : HttpClient) { }

  // getcardata():Observable<cardetails> {
  //   return this.http.get<cardetails>("http://localhost:3000/carwash")
  // }

  cardata(formdata:cardetails){
    console.log(formdata)
    return this.http.post(this.url,formdata);
   
    // return this.http.post("http://10.160.7.28:3000/carwash", JSON.stringify(formdata)).toPromise().then((data:any)=>{
    //   console.log(data);
    //   this.json = data.json
    // })
      }
}




