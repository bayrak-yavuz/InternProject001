import { Injectable } from '@angular/core';
import { UpdateBuilder } from 'firebase-functions/lib/providers/remoteConfig';
import { getHeapCodeStatistics } from 'v8';
import { Firestore } from '@google-cloud/firestore';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { CategoriesDocument, CategoriesInformation } from 'src/app/models/categories-information.model';
import { firestore } from 'firebase-admin';
import { resolveSanitizationFn } from '@angular/compiler/src/render3/view/template';
import { Observable } from 'rxjs';
import { promise } from 'selenium-webdriver';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private afs: AngularFirestore,


  ) {


    let yeniKategori: CategoriesInformation = { _syncDate: 12346579, categoryName: "Furkan", isListed: true, lang: "tr_TR", url: "hizmetlerimiz" };

    let yeniKategoriUpdate: CategoriesDocument = { categoryDocumentId: 'aThI436wLrwToZuqSsnq', categoryInformation: yeniKategori }

    let yeniKategoriGetCadegory: CategoriesDocument = { categoryDocumentId: 'aThI436wLrwToZuqSsnq', categoryInformation: {} }

    let yeniKategoriDelete: CategoriesDocument = { categoryDocumentId: 'OVtq6iDw1wiyBQ89nHzC', categoryInformation: {} }

    let yeniKategoriGetCategories: CategoriesInformation = {}

    // this.createCategory(yeniKategori)
    // this.Update(yeniKategoriUpdate)
    // this.deleteCategory(yeniKategoriDelete)
    // this.getCategory(yeniKategoriGetCadegory)
    // this.getCategories()





  }








  async createCategory(data: CategoriesInformation) {

    return await this.afs.collection('/applications/InternProject001/categories').add(data)

  }


  async Update(data: CategoriesDocument) {

    return await this.afs.doc('/applications/InternProject001/categories/' + data.categoryDocumentId).update(data.categoryInformation)
      .catch(console.error)

  }


  async getCategory(categoryDocument: CategoriesDocument) {

    return await this.afs.doc('/applications/InternProject001/categories/' + categoryDocument.categoryDocumentId).get();
  }


  async getCategories() {    
    return await this.afs.collection('/applications/InternProject001/categories').get()
  }

  async deleteCategory(categoryDocumentID: CategoriesDocument) {

    return await this.afs.doc('/applications/InternProject001/categories/' + categoryDocumentID.categoryDocumentId).delete()
  }
}


