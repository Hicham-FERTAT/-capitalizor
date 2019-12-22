import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mail : string = '';
  password : string = '';
  info : string 
  constructor() { }

  ngOnInit() {
  }
  sendToConnect(){
  this.info = this.mail+"   "+this.password
  }
}
