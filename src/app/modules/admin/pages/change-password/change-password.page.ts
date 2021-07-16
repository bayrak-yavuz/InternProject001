import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';



@Component({
  selector: 'admin-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss']
})
export class ChangePasswordPage implements OnInit {

  password: any;
  newPassword: any;
  passwordAgain: any;
  email: any;

  constructor(
    private angAuth: AngularFireAuth,
    
  ) { }

  ngOnInit(): void {
  }

  


  
passwordCheck(password: string , passwordAgain: string){
  if(this.newPassword != this.passwordAgain){
    console.log('Hatalı deneme!');
  }
  else{
    console.log('Sıkıntı yok')
    this.angAuth.sendPasswordResetEmail(this.email).then(res => console.log('email yollandı'))
  }
}
}
