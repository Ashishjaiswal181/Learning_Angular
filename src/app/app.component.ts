import { Component } from '@angular/core';
import { ServiceLoginService } from './service-login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  uname="";
  pass="";
  alrt;
  phone="";
  prog=0;
  gender;
  opt;
  drop=["Java", "Python","R", "Data Analytics", "Machine Learning"];
  constructor(private data: ServiceLoginService){}
  username(){
  if(this.uname=="")
  {
    this.alrt="*username is empty"; 
  }
  else
  {
    this.alrt="";
    this.prog=20;
  }
}
password(){
  if(this.pass=="")
  {
    this.alrt="*password is empty";
  }
  else
  {
    this.alrt="";
    this.prog=40;
  }
}
radio(){
if(this.gender==""){
  this.alrt="*select gender";
}
else
{
  this.alrt="";
  this.prog=60;
}
}
contact(){
  if(this.phone=="")
  {
    this.alrt="*phone number required";
  }
  else
  {
    this.alrt="";
    this.prog=80;
  }
}
lst(){
  if(this.opt==""){
    this.alrt="*select options";
  }
  else
  {
    this.alrt="";
    this.prog=100;
  }
  }
  submit(){
    this.data.submitdata(this.uname);
  }
}
