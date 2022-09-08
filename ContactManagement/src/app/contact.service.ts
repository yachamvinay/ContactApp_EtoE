import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  apiUrl:string="http://localhost:8080/";

  constructor(private http: HttpClient) { }
  create(data:any):Observable<any>{
    
    console.log(JSON.stringify(data));
       return this.http.post(this.apiUrl+"contact",data);

  }

  register(data:any):Observable<any>{
    console.log( data );
         return this.http.post(this.apiUrl+"saveuser",data);
    }   

  login(username:string,password:string):Observable<any>{
    
      return this.http.get(this.apiUrl+"login?uname="+username+"&password="+password);
 }
 getcontact()
    {
      return this.http.get(this.apiUrl+"listcontact");
    }

}
