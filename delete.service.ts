import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { deletedata } from './pages/classes/cardetails';
@Injectable({
  providedIn: 'root'
})
export class DeleteService {
  formdata:deletedata;
    
  readonly url = "http://localhost:3000/delete"
  //  readonly url = "http://10.160.7.28:3000/login"

  constructor(private http : HttpClient) { }

  postlogin(formdata:deletedata){
    console.log(formdata)
  
    return this.http.post<any>(this.url,formdata);
   
      }
}
