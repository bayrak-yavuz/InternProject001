import { Injectable } from '@angular/core';
import { PostsInformation } from 'src/app/models/posts-information.model';
import { PostsDocuments } from 'src/app/models/posts-documents.model';
import { firestore } from 'firebase-admin';
import { AngularFirestore } from '@angular/fire/firestore';
import { UpdateBuilder } from 'firebase-functions/lib/providers/remoteConfig';
import { getHeapCodeStatistics } from 'v8';
import { resolveSanitizationFn } from '@angular/compiler/src/render3/view/template';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  
  constructor(
    private afs : AngularFirestore, 
  ) {}

  async createPosts(data : PostsInformation){
    this.afs.collection('/applications/InternProject001/posts/postID').add(data).then(res =>)
    //yeni post oluştur 
  }

  async updatePosts(ID : PostsDocuments){
    this.afs.collection('/applications/InternProject001/posts/postID').update(ID).then(res =>)
    //güncelle
    
  }
  async getPost(){
    let doc:any
    this.afs.collection('/applications/InternProject001/posts/postID').get(environment.appID).then(res =>)
    if (!doc.exists) {
      console.log('');
    } else {
      console.log(':', doc.data());
    }
    return;
  }
  async getPosts(){
    this.afs.collection('/applications/InternProject001/posts/postID').get(environment.appID).then(res =>)
    const snapshot = await citiesRef.where('capital', '==', true).get();
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }  

    snapshot.forEach(doc => {
    console.log(, '=>', doc.data());
    });
 
  }
  async deletePosts(){
    this.afs.collection('/applications/InternProject001/posts/postID').valueChanges()
  }

}
