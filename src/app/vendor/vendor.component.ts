import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { carouselItems } from 'src/constants';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})

export class VendorComponent implements OnInit {

  carouselItems = carouselItems

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
