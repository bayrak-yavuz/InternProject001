import { Component, OnInit } from '@angular/core';
import { isInteger, now } from 'lodash';
import { PostsDocument } from 'src/app/models/posts-information.model';
import { PostsService } from '../../services/posts.service';
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
  post: string="";
  constructor(private postservice: PostsService) { }

  ngOnInit(): void {
  }

  updatePost(id : string){
    let a =new PostsDocument({_syncDate: Number.parseInt(this.date.toString()) ,htmlContent:"post",postIndex:0,postLang:"",postName:"",postUrl:""},id)
    this.postservice.updatePosts(a)
    
  }


}
