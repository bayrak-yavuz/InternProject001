import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'admin-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss']
})
export class CategoriesPage implements OnInit {
  array: any[] = [];  
  constructor(private cs: CategoriesService) { }

  ngOnInit(): void {
    this.getCats();
  }

  getCats() {
    this.cs.getCategories().then(res => {
      res.subscribe(s => {
        s.docs.forEach(doc => { this.array.push({data: doc.data(), id: doc.id})})
        this.array = this.array.sort((a: any, b: any) => (a?.categoryName + b?.categoryName))
      })
    });
  }

}
