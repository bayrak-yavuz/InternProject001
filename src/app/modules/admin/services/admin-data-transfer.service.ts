import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { LoginInformation } from 'src/app/models/login-information.model';
import { RegisterInformation } from 'src/app/models/register-information.model';

export interface User{User: string};

@Injectable({
  providedIn: 'root'
})


export class AdminDataTransferService {
  
  constructor(

    private angFireLogout: AngularFireAuth,
    private afs: AngularFirestore,
    
    
  ) { }

   async asd(data: RegisterInformation, uid?:string){
     if (uid) {
      this.afs.doc('applications/internProject001/users/'+uid).set(data).then(res=>{})
      }
    }

  logout(){
    this.angFireLogout.signOut();
    // TODO: Çıkış yapmak için gerekli fonksiyon
  }

  async changePassword(){

    
  }

}

