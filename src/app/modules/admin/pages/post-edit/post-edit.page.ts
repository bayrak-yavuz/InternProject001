import { PostsPage } from './../posts/posts.page';
import { PostsInformation } from './../../../../models/posts-information.model';
import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';
import { isInteger, now } from 'lodash';
import { PostsDocument } from 'src/app/models/posts-information.model';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute, Params, Router, UrlSegment } from '@angular/router';
@Component({
  selector: 'admin-post-edit',
  templateUrl: './post-edit.page.html',
  styleUrls: ['./post-edit.page.scss']
})
export class PostEditPage implements OnInit {
  editorInit:any ={
    height: 300,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print',
      'preview anchor searchreplace visualblocks code',
      'fullscreen insertdatetime media table paste',
      'help wordcount'
    ],
    toolbar:
      'undo redo | formatselect | bold italic | \
      alignleft aligncenter alignright alignjustify | \
      bullist numlist outdent indent | help'
  }
  date: Date = new Date(now());
  postNameEdit: any;
  postLan: any;
  postContent: any;
  idUpdate : string = "";
  postList:any[] =[]



  constructor(private postservice: PostsService, private route: ActivatedRoute) { }
  ngOnInit(): void {
   this.getPostEdit()
   this.postService()
   console.log(this.postNameEdit,this.postLan,this.postContent)

  }

  idGet(){
    let getId = window.location.pathname.slice(window.location.pathname.lastIndexOf("/")+1)
    return getId
  }

  updatePost(){
    let a =new PostsDocument({_syncDate: Number.parseInt(this.date.toString()) ,htmlContent:this.postContent,postIndex:0,postLang:this.postLan,postName:this.postNameEdit,postUrl:""},this.idUpdate)
    console.log(a)
    this.postservice.updatePosts(a)

  }

  getPostEdit(){
    let a =new PostsDocument({},this.idGet())
    this.postservice.getPost(a).then(res=> {res.subscribe( res1=> {this.idUpdate = res1.id})});


  }
  postService(){
    this.postservice.getPosts().then(res=> {res.subscribe(res1=> { res1.forEach(doc=>  {if(this.idGet()==doc.id){this.postList.push({data:doc.data(), id: doc.id})}})})})

   }

}
