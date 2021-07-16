import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { PostsDocument } from 'src/app/models/posts-information.model';
@Component({
  selector: 'admin-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss']
})
export class PostsPage implements OnInit {
   post:any[]=[];
   ids:any[]=[];
  
  constructor(private postservice: PostsService) { }

  ngOnInit(): void {
    this.postService()
    this.getPostService("vwTMYzQ3zjSYuvJQ7EvT")
  }
  postService(){
   this.postservice.getPosts().then(res=> {res.subscribe(res1=> { res1.forEach(doc=> {this.post.push(doc.data())})})})
   console.log(this.post)
  }
  getPostService(id: string){
    let a =new PostsDocument({_syncDate: 0,htmlContent:"",postIndex:0,postLang:"",postName:"",postUrl:""},id)
    this.postservice.getPost(a); 
    this.postservice.getPost(a).then(a=> {a.subscribe(b=> {this.ids.push(b.id)})})
  }

  postDelete(id: PostsDocument){
    this.postservice.deletePosts(id)
  }
  
  
}
