import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { cardetails } from './pages/classes/cardetails';

@Injectable({
  providedIn: 'root'
})
export class CardetailsService {
  formdata:cardetails;
    
  readonly url = "http://localhost:3000/carwashinshert"
  //  readonly url = "http://10.160.7.28:3000/login"
  constructor(private http : HttpClient) { }

  postlogin(formdata:cardetails){
    console.log(formdata)
    return this.http.post<any>(this.url,formdata);
   
      }
}
