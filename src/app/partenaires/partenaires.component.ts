import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-partenaires',
  templateUrl: './partenaires.component.html',
  styleUrls: ['./partenaires.component.css']
})
export class PartenairesComponent implements OnInit, AfterViewInit {

  @ViewChild('testimonialCarousel', { static: true }) testimonialCarousel?: ElementRef;

  constructor() { }

  ngOnInit(): void {
    if (this.testimonialCarousel) {
      $(this.testimonialCarousel.nativeElement).owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
          0: {
            items: 1
          },
          576: {
            items: 1
          },
          768: {
            items: 2
          },
          992: {
            items: 3
          }
        }
      });
    }
  }

  ngAfterViewInit() {
    // Refresh the Owl Carousel after the view has been initialized
    if (this.testimonialCarousel)
      $(this.testimonialCarousel.nativeElement).trigger('refresh.owl.carousel');
  }

}
