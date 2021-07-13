import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginInformation } from '../models/login-information.model';
import firebase from 'firebase';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(

    private angFireAuth: AngularFireAuth,

  ) { }

   async loginViaEmailAndPassword(loginInfo: LoginInformation){

    if(!loginInfo.email){
      console.log('E posta alanı boş bırakılamaz:')
      return ""
    }
    if (!loginInfo.password) {
      console.log('Şifre alanı boş bırakılamaz:')
      return ""
    } 
 

    await this.angFireAuth.signInWithEmailAndPassword(loginInfo.email, loginInfo.password)
    .then(value => {

      console.log('Başarılı!');
      
    })
    .catch(err => {
      console.log('Bir şeyler ters gitti: ', err.message);  

    })
    .catch(err => {
      console.log('E-mail adresi yanlış, tekrar deneyiniz: ', err.email);    
        
    })
    .catch(err => {
      console.log('Şifrenizi yanlış girdiniz, tekrar deneyiniz: ', err.password);  

    });

    

    // Not: Fonksiyon asenkron olmalı
  }

  async registerViaEmailAndPassword(email: string, password: string){
    await this.angFireAuth.createUserWithEmailAndPassword(email, password)
    .then(res => {
      res.user?.uid

  })}

  async loginViaGoogle(){
    this.angFireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

}
