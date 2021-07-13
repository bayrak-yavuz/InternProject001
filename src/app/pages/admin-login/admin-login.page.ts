import { Component, Input, OnInit } from '@angular/core';
import { auth } from 'firebase-admin';
import { LoginInformation } from 'src/app/models/login-information.model';
import { AuthenticationService } from 'src/app/services/authentication.service'; 

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.page.html',
  styleUrls: ['./admin-login.page.scss']
})
export class AdminLoginPage implements OnInit {

  email:any;
  password:any;
  

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  login(email: string, password: string): void {
    this.auth.loginViaEmailAndPassword(
      new LoginInformation(email, password));
  }
  loginGoogle(){
    this.auth.loginViaGoogle();
  }

}
