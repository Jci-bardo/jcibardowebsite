import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  @ViewChild('vendorCarousel', { static: true }) vendorCarousel?: ElementRef;

  constructor() { }

  ngOnInit(): void {
    if (this.vendorCarousel) {
      $(this.vendorCarousel.nativeElement).owlCarousel({
        loop: true,
        margin: 45,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:4
            },
            768:{
                items:6
            },
            992:{
                items:8
            }
        }
    });
    }
  }

  ngAfterViewInit() {
    // Refresh the Owl Carousel after the view has been initialized
    if (this.vendorCarousel)
      $(this.vendorCarousel.nativeElement).trigger('refresh.owl.carousel');
  }

}
