import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginInformation } from '../models/login-information.model';
import firebase from 'firebase';
import { EmailValidator } from '@angular/forms';
import { RegisterInformation } from '../models/register-information.model';
import { AdminDataTransferService } from '../modules/admin/services/admin-data-transfer.service';
import { CustomError } from '../models/custom-error.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor( private adminDataTransferService: AdminDataTransferService, private angularFireAuth: AngularFireAuth ) { }

   async loginViaEmailAndPassword(loginInfo: LoginInformation): Promise< any | CustomError | undefined > {
    let customError: CustomError = new CustomError('', '');

    if (!loginInfo.email){
      customError.code = 'auth/email-empty';
      customError.message = 'E posta alanı boş bırakılamaz';
      console.error('ERROR', customError);
      return customError;
    }
    if (!loginInfo.password) {
      customError.code = 'auth/password-empty';
      customError.message = 'Şifre alanı boş bırakılamaz.';
      console.error('ERROR', customError);
      return customError;
    }

    await this.angularFireAuth.signInWithEmailAndPassword(loginInfo.email, loginInfo.password)
    .then(value => { console.log('Başarılı!', value); })
    .catch((err: CustomError) => {
      if (err.code === 'auth/user-not-found'){
        err.message = 'Kullanıcı bulunamadı...';
        customError = err;
      }
      else if (err.code === 'auth/invalid-email'){
        err.message = 'Posta adresi hatalı biçimlendirilmiş.';
        customError = err;
      }
      else if (err.code === 'auth/wrong-password'){
        err.message = 'Böyle bir şifre bulunamamaktadır.';
        customError = err;
      }

      return customError;
    });
  }

  async registerViaEmailAndPassword(registerInf: RegisterInformation): Promise<void> {
    await this.angularFireAuth.createUserWithEmailAndPassword(registerInf.email, registerInf.password)
    .then(res => {
      this.adminDataTransferService.asd(registerInf, res.user?.uid);
    });
  }

  async loginViaGoogle(): Promise<void> {
    await this.angularFireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

}
