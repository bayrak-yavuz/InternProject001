import { Component, OnInit } from '@angular/core';
import { RegisterInformation } from 'src/app/models/register-information.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.page.html',
  styleUrls: ['./admin-register.page.scss']
})
export class AdminRegisterPage implements OnInit {

  name:any;
  email:any;
  password:any;

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  register(name:string, email:string, password: string){
    this.auth.registerViaEmailAndPassword(new RegisterInformation(name,email,password));
  }

}
