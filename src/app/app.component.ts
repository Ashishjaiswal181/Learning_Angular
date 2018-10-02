import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name="";
  pass="";
  alrt;
  phone="";
  prog=0;
  gender;
  opt;
  drop=["Java", "Python","R", "Data Analytics", "Machine Learning"];
  username(){
  if(this.name=="")
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
}
