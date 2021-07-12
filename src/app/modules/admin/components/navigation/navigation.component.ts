import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'admin-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  // FIXME Menü butonu aktiflik durumu düzenlenecek menü içeriği dizi olarak alınacak
  main = false;
  kategoriler = false;
  yazilar = false;
  yorumlar = false;
  sayfalar = false;
  sayfaSablonlari = false;
  menuler = false;
  formlar = false;
  globalBilesenler = false;
  globalSeoAyarlari = false;
  palet = false;
  galeri = false;
  klasorler = false;
  iletisimTalepleri = false;
  gelenSorular = false;
  doldurulanFormlar = false;
  randevular = false;
  takvimim = false;
  kullanicilar = false;
  yetkilendirme = false;
  hesapAyarlari = false;
  faturalar = false;
  odemeler = false;
  urunlerVeEklentiler = false;
  sozlesmeler = false;
  talepler = false;
  dokumantasyon = false;

  constructor(private router: Router) {
    let url =  this.router.url;
    if (url === '/admin'){
      this.main = true;
    }
    else if (url === '/admin/kategoriler'){
      this.kategoriler = true;
    }
    else if (url === '/admin/yazilar'){
      this.yazilar = true;
    }
    else if (url === '/admin/yorumlar'){
      this.yorumlar = true;
    }
    else if (url === '/admin/sayfalar'){
      this.sayfalar = true;
    }
    else if (url === '/admin/sayfa-sablonlari'){
      this.sayfaSablonlari = true;
    }
    else if (url === '/admin/menuler'){
      this.menuler = true;
    }
    else if (url === '/admin/formlar'){
      this.formlar = true;
    }
    else if (url === '/admin/global-bilesenler'){
      this.globalBilesenler = true;
    }
    else if (url === '/admin/global-seo-ayarlari'){
      this.globalSeoAyarlari = true;
    }
    else if (url === '/admin/palet'){
      this.palet = true;
    }
    else if (url === '/admin/galeri'){
      this.galeri = true;
    }
    else if (url === '/admin/klasorler'){
      this.klasorler = true;
    }
    else if (url === '/admin/iletisim-talepleri'){
      this.iletisimTalepleri = true;
    }
    else if (url === '/admin/gelen-sorular'){
      this.gelenSorular = true;
    }
    else if (url === '/admin/doldurulan-formlar'){
      this.doldurulanFormlar = true;
    }
    else if (url === '/admin/randevular'){
      this.randevular = true;
    }
    else if (url === '/admin/takvimim'){
      this.takvimim = true;
    }
    else if (url === '/admin/kullanicilar'){
      this.kullanicilar = true;
    }
    else if (url === '/admin/yetkilendirme'){
      this.yetkilendirme = true;
    }
    else if (url === '/admin/hesap-ayarlari'){
      this.hesapAyarlari = true;
    }
    else if (url === '/admin/faturalar'){
      this.faturalar = true;
    }
    else if (url === '/admin/odemeler'){
      this.odemeler = true;
    }
    else if (url === '/admin/urunler-ve-eklentiler'){
      this.urunlerVeEklentiler = true;
    }
    else if (url === '/admin/sozlesmeler'){
      this.sozlesmeler = true;
    }
    else if (url === '/admin/talepler'){
      this.talepler = true;
    }
    else if (url === '/admin/dokumantasyon'){
      this.dokumantasyon = true;
    }

  }

  ngOnInit(): void {
    this.router.events.subscribe((res: any) => {
      if (res instanceof NavigationEnd){
        this.main = false; this.kategoriler = false; this.yazilar = false; this.yorumlar = false;
        this.sayfalar = false; this.sayfaSablonlari = false; this.menuler = false; this.formlar = false;
        this.globalBilesenler = false; this.globalSeoAyarlari = false; this.palet = false; this.galeri = false;
        this.klasorler = false; this.iletisimTalepleri = false; this.gelenSorular = false; this.doldurulanFormlar = false;
        this.randevular = false; this.takvimim = false; this.kullanicilar = false; this.yetkilendirme = false;
        this.hesapAyarlari = false; this.faturalar = false; this.odemeler = false; this.urunlerVeEklentiler = false;
        this.sozlesmeler = false; this.talepler = false; this.dokumantasyon = false;

        if (res.url === '/admin'){ this.main = true; }
        else if (res.url === '/admin/kategoriler'){ this.kategoriler = true; }
        else if (res.url === '/admin/yazilar'){ this.yazilar = true; }
        else if (res.url === '/admin/yorumlar'){ this.yorumlar = true; }
        else if (res.url === '/admin/sayfalar'){ this.sayfalar = true; }
        else if (res.url === '/admin/sayfa-sablonlari'){ this.sayfaSablonlari = true; }
        else if (res.url === '/admin/menuler'){ this.menuler = true; }
        else if (res.url === '/admin/formlar'){ this.formlar = true; }
        else if (res.url === '/admin/global-bilesenler'){ this.globalBilesenler = true; }
        else if (res.url === '/admin/global-seo-ayarlari'){ this.globalSeoAyarlari = true; }
        else if (res.url === '/admin/palet'){ this.palet = true; }
        else if (res.url === '/admin/galeri'){ this.galeri = true; }
        else if (res.url === '/admin/klasorler'){ this.klasorler = true; }
        else if (res.url === '/admin/iletisim-talepleri'){ this.iletisimTalepleri = true; }
        else if (res.url === '/admin/gelen-sorular'){ this.gelenSorular = true; }
        else if (res.url === '/admin/doldurulan-formlar'){ this.doldurulanFormlar = true; }
        else if (res.url === '/admin/randevular'){ this.randevular = true; }
        else if (res.url === '/admin/takvimim'){ this.takvimim = true; }
        else if (res.url === '/admin/kullanicilar'){ this.kullanicilar = true; }
        else if (res.url === '/admin/yetkilendirme'){ this.yetkilendirme = true; }
        else if (res.url === '/admin/hesap-ayarlari'){ this.hesapAyarlari = true; }
        else if (res.url === '/admin/faturalar'){ this.faturalar = true; }
        else if (res.url === '/admin/odemeler'){ this.odemeler = true; }
        else if (res.url === '/admin/urunler-ve-eklentiler'){ this.urunlerVeEklentiler = true; }
        else if (res.url === '/admin/sozlesmeler'){ this.sozlesmeler = true; }
        else if (res.url === '/admin/talepler'){ this.talepler = true; }
        else if (res.url === '/admin/dokumantasyon'){ this.dokumantasyon = true; }
      }
    });
  }

}
