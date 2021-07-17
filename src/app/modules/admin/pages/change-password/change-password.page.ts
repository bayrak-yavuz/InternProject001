import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CommonModule, NgStyle ,NgClass} from '@angular/common';



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

  hatali = false;


  constructor(
    private angAuth: AngularFireAuth,
    
  ) { }

  ngOnInit(): void {
  }

  


  
passwordCheck(password: string , passwordAgain: string){
  
  if(this.newPassword != this.passwordAgain){
    this.hatali = true;
    console.log('Hatalı deneme!');
  }
  else{
    console.log('Sıkıntı yok')
    this.hatali = false;
    this.angAuth.sendPasswordResetEmail(this.email).then(res => console.log('email yollandı'))
  }

}
}
