import { Injectable } from '@angular/core';
import { PostsInformation } from 'src/app/models/posts-information.model';
import { firestore } from 'firebase-admin';
import { AngularFirestore } from '@angular/fire/firestore';
import { UpdateBuilder } from 'firebase-functions/lib/providers/remoteConfig';
import { getHeapCodeStatistics } from 'v8';
import { resolveSanitizationFn } from '@angular/compiler/src/render3/view/template';
import { environment } from 'src/environments/environment';
import { PostsDocument } from 'src/app/models/posts-information.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private afs : AngularFirestore, 
  ) {

    let yeniGonderi: PostsInformation = {_syncDate:1234656798 ,  postName: " Fatma Betül", postIndex :5, postLang : "tr_TR", postUrl:"yazi-url-adresi", htmlContent: "<h1> Yazı İçeriği Burada </h1>"}
    let yeniGonderiUpdate: PostsDocument = {postDocumentId: 'gcHVNVW37Sxfn2RZmY5H' , postInformation: yeniGonderi}
    let yeniGonderiGetPost: PostsDocument = {postDocumentId: 'vwTMYzQ3zjSYuvJQ7EvT' , postInformation: {}}
    let yeniGonderiDelete: PostsDocument = {postDocumentId: 'gcHVNVW37Sxfn2RZmY5H' , postInformation: {}}
    let yeniGonderiGetPosts: PostsInformation = {}

  //this.updatePosts(yeniGonderiUpdate)
  //this.deletePosts(yeniGonderiDelete)
  //this.createPosts(yeniGonderi)
  //this.getPost(yeniGonderiGetPost)
  //this.getPosts()

  }

  async createPosts(data : PostsInformation){
    return await this.afs.collection('/applications/'+environment.appID+'/posts/').add(data)
    //yeni post oluştur 
  }

  async updatePosts(data : PostsDocument){
   return await this.afs.doc('/applications/'+environment.appID+'/posts/'+data.postDocumentId).update(data.postInformation)
    .catch(console.error)
    //güncelle
    
  }
  async getPost(postDocumentId: PostsDocument){
    
    return await this.afs.doc('/applications/'+environment.appID+'/posts/'+postDocumentId.postDocumentId).get()
    
  }


  async getPosts(){
    
  return await this.afs.collection('/applications/InternProject001/posts').get()
   
  }

  async deletePosts(postDocumentID:PostsDocument){
    return await this.afs.doc('/applications/InternProject001/posts/'+postDocumentID.postDocumentId).delete()
  }
}