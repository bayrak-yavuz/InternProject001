import { Component, OnInit } from '@angular/core';
import { browser } from 'protractor';
import { CategoriesDocument } from 'src/app/models/categories-information.model';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'admin-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss']
})

export class CategoriesPage implements OnInit {
  array: any[] = [];
  backdropOn = false;
  delId = "";
  detCat: any[] = [];

  constructor(private cs: CategoriesService) { }

  ngOnInit(): void {
    this.getCats();
  }

  detailCat(id: string) {
    this.detCat = []
    let detC = new CategoriesDocument({}, id);
    this.cs.getCategory(detC).then(res => { res.subscribe(s => this.detCat.push(s.data())) });    
  }

  deleteCat() {
    let dc = new CategoriesDocument({}, this.delId);
    this.cs.deleteCategory(dc).then(t => alert("Silindi!")).catch(e => alert("Silme İşleminde Hata:\n" + e));
    this.array = [];
    this.getCats();
  }

  getCats() {
    this.cs.getCategories().then(res => {
      res.subscribe(s => {
        s.docs.forEach(doc => { this.array.push({ data: doc.data(), id: doc.id }) })
        this.array = this.array.sort((a: any, b: any) => (a?.categoryName + b?.categoryName))
      })
    });
  }

  backdropToggle() {
    this.backdropOn = !this.backdropOn;
  }

}
