import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class ServiceLoginService {
   //any;

  constructor(private http:Http) { }
  submitdata(uname){
    //console.log(uname);
    this.http.post("http://localhost:8090/login",uname).
    //map((response) => response.json()).
    subscribe((data) => console.log(data));
  }
}