import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AdminDataTransferService {

  constructor(

    private angFireLogout: AngularFireAuth
  ) { }

  logout(){
    this.angFireLogout.signOut();
    // TODO: Çıkış yapmak için gerekli fonksiyon
  }

}
