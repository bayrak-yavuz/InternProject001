import { Component, OnInit } from '@angular/core';
import { AdminDataTransferService } from '../../services/admin-data-transfer.service';

@Component({
  selector: 'admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private adts: AdminDataTransferService) { }

  ngOnInit(): void {
  }

  logout(){
    // TODO: Çıkış yapmak için çağrılacak fonksiyon
    this.adts.logout();

    // Servisteki fonksiyon tamamalnıncaya kadar aşağıdaki gibi alert ile kontrol yapılabilir.
    alert('logout works!');
  }

}
