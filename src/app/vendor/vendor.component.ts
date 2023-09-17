import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  carouselItems = [
    // Define your carousel items here
    '../../assets/img/partenaires/youth.jpg',
    '../../assets/img/partenaires/centre.jpg',
    '../../assets/img/partenaires/biblio.jpg',
    '../../assets/img/partenaires/iri.jpg',
    '../../assets/img/partenaires/cluby.jpg',
    '../../assets/img/partenaires/munici.png',
    '../../assets/img/partenaires/femme.jpg',
    '../../assets/img/partenaires/bayrem.jpg',
    '../../assets/img/partenaires/aneti.png',
    '../../assets/img/partenaires/saad.jpg',
    '../../assets/img/partenaires/himo.jpg',
    '../../assets/img/partenaires/nt.jpg',
    '../../assets/img/partenaires/injaz.jpg'
  ];

  carouselConfig: OwlOptions = {
    loop: true,
    margin: 45,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
        0:{
            items: 2
        },
        576:{
            items: 4
        },
        768:{
            items: 6
        },
        992:{
            items: 8
        }
    }
  };



  constructor() { }

  ngOnInit(): void { 
  }
}
