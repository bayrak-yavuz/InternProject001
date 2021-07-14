import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'admin-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  constructor(

    private categorySer: CategoriesService,
    private postSer: PostsService
  ) { }

  ngOnInit(): void {
  }

}
