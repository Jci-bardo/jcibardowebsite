import { Component, OnInit, HostListener } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-backtotop',
  templateUrl: './backtotop.component.html',
  styleUrls: ['./backtotop.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class BacktotopComponent implements OnInit {
  showBackToTop = false;

  @HostListener('window:scroll', [])
  onScroll() {
    if (window.scrollY > 100) {
      this.showBackToTop = true;
    } else {
      this.showBackToTop = false;
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  constructor() { }

  ngOnInit(): void {
  }
}