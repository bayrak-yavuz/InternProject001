import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { AdminDataTransferService } from '../../services/admin-data-transfer.service';

@Component({
  selector: 'admin-root',
  templateUrl: './root.page.html',
  styleUrls: ['./root.page.scss']
})
export class RootPage implements OnInit {

  menuHidden = false;

  constructor(private meta: Meta, private title: Title, private adts: AdminDataTransferService) {
    this.meta.addTag({name: 'robots', content: 'noindex'});
    this.title.setTitle('Yönetim Paneli');
    if (window.innerWidth <= 500){
      this.menuHidden = true;
    }
    this.setColors([]);
  }

  ngOnInit(): void { }

  menuToggle(): void{ this.menuHidden = !this.menuHidden; }
  setColors(colors: any[]): void {
    colors = [
        {property: '--danger-lightest-color', value: '252,85,101'},
        {property: '--danger-lighter-color', value: '236,69,85'},
        {property: '--danger-normal-color',  value: '220,53,69'},
        {property: '--danger-darker-color',  value: '204,37,53'},
        {property: '--danger-darkest-color', value: '188,21,37'},
        {property: '--dark-lightest-color', value: '84,90,96'},
        {property: '--dark-lighter-color', value: '68,74,80'},
        {property: '--dark-normal-color',  value: '52,58,64'},
        {property: '--dark-darker-color',  value: '36,42,48'},
        {property: '--dark-darkest-color', value: '20,26,32'},
        {property: '--info-lightest-color', value: '55,194,216'},
        {property: '--info-lighter-color', value: '39,178,200'},
        {property: '--info-normal-color',  value: '23,162,184'},
        {property: '--info-darker-color',  value: '7,146,168'},
        {property: '--info-darkest-color', value: '0,130,152'},
        {property: '--light-lightest-color', value: '255,255,255'},
        {property: '--light-lighter-color', value: '251,252,252'},
        {property: '--light-normal-color',  value: '248,249,250'},
        {property: '--light-darker-color',  value: '232,233,234'},
        {property: '--light-darkest-color', value: '216,217,218'},
        {property: '--primary-lightest-color', value: '67,108,154'},
        {property: '--primary-lighter-color', value: '51,92,138'},
        {property: '--primary-normal-color',  value: '35,76,122'},
        {property: '--primary-darker-color',  value: '19,60,106'},
        {property: '--primary-darkest-color', value: '3,44,90'},
        {property: '--secondary-lightest-color', value: '63,189,127'},
        {property: '--secondary-lighter-color', value: '47,173,101'},
        {property: '--secondary-normal-color',  value: '31,157,85'},
        {property: '--secondary-darker-color',  value: '15,141,69'},
        {property: '--secondary-darkest-color', value: '0,125,53'},
        {property: '--success-lightest-color', value: '63,189,117'},
        {property: '--success-lighter-color', value: '47,173,101'},
        {property: '--success-normal-color',  value: '31,157,85'},
        {property: '--success-darker-color',  value: '15,141,69'},
        {property: '--success-darkest-color', value: '0,125,53'},
        {property: '--warning-lightest-color', value: '255,255,30'},
        {property: '--warning-lighter-color', value: '255,209,23'},
        {property: '--warning-normal-color',  value: '255,193,7'},
        {property: '--warning-darker-color',  value: '239,177,3'},
        {property: '--warning-darkest-color', value: '223,161,0'}
      ];
    let b = ':root {' ;
    colors.forEach( c => {
      b = b + '' + c.property + ': ' + c.value + ';';
    });
    b = b + '}';
    if (document.readyState !== 'loading'){
      document.querySelector('style')?.append(b);
    }
  }
}
