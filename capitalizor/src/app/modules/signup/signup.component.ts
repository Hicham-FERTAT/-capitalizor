import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email : string ="";
  confirmEmail: string = "";
  password : string ="";
  psudoName : string ="";
  day : string ="";
  year : string ="";

  constructor() { }

  ngOnInit() {
  }
  sendToSignUp(){
    
  }
}
