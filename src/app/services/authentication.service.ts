import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  loginViaEmailAndPassword(){
    // TODO: Email ve parola ile Giriş bu fonksiyon ile gerçekleştirilecek.
    // Not: Fonksiyon asenkron olmalı
  }

  registerViaEmailAndPassword(){
    // TODO: Email ve parola ile kullanıcı kaydı.
    // Not: Fonksiyon asenkron olmalı
  }

  loginViaGoogle(){
    // TODO: Google ile giriş.
    // Not: Fonksiyon asenkron olmalı
  }
}
