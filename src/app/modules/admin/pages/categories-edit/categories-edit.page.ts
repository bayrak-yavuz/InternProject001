import { Component, OnInit } from '@angular/core';
import { CategoriesDocument } from '../../../../models/categories-information.model';
import { CategoriesService } from '../../services/categories.service';


@Component({
  selector: 'admin-categories-edit',
  templateUrl: './categories-edit.page.html',
  styleUrls: ['./categories-edit.page.scss']
})
export class CategoriesEditPage implements OnInit {

  upUrl: any;
  upLang: any;
  upIsListed: any;
  upName: any;
  upDate: any;
  upCatList : any[] = [];

  constructor(private cs: CategoriesService) { }

  ngOnInit(): void {
    this.upDate = new Date().toLocaleString();
    this.getDefaultValues();    
  }

  getDefaultValues() {
    let def = new CategoriesDocument({}, this.getUrlId());
    this.cs.getCategory(def).then(t => { t.subscribe(s => { if (this.getUrlId() == s.id) { this.upCatList.push(s.data()) } }) });
  }

  updateCategory() {    
    let upCategory = new CategoriesDocument({ url: this.upUrl, lang: this.upLang, isListed: this.upIsListed, categoryName: this.upName, _syncDate: this.upDate }, this.getUrlId());
    this.cs.Update(upCategory).then(t => alert("Güncellendi.")).catch(e => alert("Hata\n" + e));
  }

  getUrlId() {
    return window.location.pathname.slice(window.location.pathname.lastIndexOf("/") + 1)
  }

}
