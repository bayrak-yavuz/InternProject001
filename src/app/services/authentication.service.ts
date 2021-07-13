import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginInformation } from '../models/login-information.model';
import firebase from 'firebase';
import { EmailValidator } from '@angular/forms';
import { RegisterInformation } from '../models/register-information.model';
import { AdminDataTransferService } from '../modules/admin/services/admin-data-transfer.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private loginInfCons: AdminDataTransferService,

    private angFireAuth: AngularFireAuth,

  ) { }

   async loginViaEmailAndPassword(loginInfo: LoginInformation){
    let cErr:any
    if(!loginInfo.email){
      console.log('E posta alanı boş bırakılamaz:')
      return cErr
    }
    if (!loginInfo.password) {
      console.log('Şifre alanı boş bırakılamaz:')
      return cErr
    } 
 

    await this.angFireAuth.signInWithEmailAndPassword(loginInfo.email, loginInfo.password)
    .then(value => {

      console.log('Başarılı!');
      
    })
    .catch(err => {
      let cErr:any
      console.log('Bir şeyler ters gitti: ', cErr.message);
      if (err.code == 'auth/user-not-found'){
        cErr.code = err.code
        cErr.message = "Kullanıcı bulunamadı... "
      }  
      
      console.log('E-mail adresi yanlış, tekrar deneyiniz: ', err.email);
      if(err.code == 'auth/invalid-email'){
        cErr.code = err.code
        cErr.message = "Posta adresi hatalı biçimlendirilmiş "
      }
      console.log('Şifrenizi yanlış girdiniz, tekrar deneyiniz: ', err.password);  
      if(err.code == 'auth/wrong-password'){
        cErr.code = err.code
        cErr.message = "Böyle bir şifre bulunamamaktadır. "
      }

    });

  }

  async registerViaEmailAndPassword(registerInf: RegisterInformation){
    await this.angFireAuth.createUserWithEmailAndPassword(registerInf.email, registerInf.password)
    .then(res => {
      this.loginInfCons.asd(registerInf, res.user?.uid)

  })}

  async loginViaGoogle(){
    this.angFireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

}
