import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginInformation } from '../models/login-information.model';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(

    private angFireAuth: AngularFireAuth,

  ) { }

   async loginViaEmailAndPassword(loginInfo: LoginInformation){

    await this.angFireAuth.signInWithEmailAndPassword(loginInfo.email, loginInfo.password)
    .then(value => {

      console.log('Başarılı!');
      
    })
    .catch(err => {
      console.log('Bir şeyler ters gitti: ', err.message);
    });
    // TODO: Email ve parola ile Giriş bu fonksiyon ile gerçekleştirilecek.
    // Not: Fonksiyon asenkron olmalı
  }

  async registerViaEmailAndPassword(){
    // TODO: Email ve parola ile kullanıcı kaydı.
    // Not: Fonksiyon asenkron olmalı
  }

  async loginViaGoogle(){
    this.angFireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
    // TODO: Google ile giriş.
    // Not: Fonksiyon asenkron olmalı  
}
