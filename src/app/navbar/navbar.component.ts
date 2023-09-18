import { Component, OnInit, HostListener, Renderer2, ElementRef } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentRoute: String

  constructor(private el: ElementRef, private router: Router, private renderer: Renderer2) { 
    this.currentRoute = "";
    this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationEnd) {
            this.currentRoute = event.url;          
            if (this.currentRoute === '/about') {
              this.renderer.addClass(this.el.nativeElement.querySelector("#about"), 'active');
              this.renderer.removeClass(this.el.nativeElement.querySelector("#home"), 'active');
              this.renderer.removeClass(this.el.nativeElement.querySelector("#programmes"), 'active');
              this.renderer.removeClass(this.el.nativeElement.querySelector("#blog"), 'active');
              this.renderer.removeClass(this.el.nativeElement.querySelector("#grid"), 'active');
              this.renderer.removeClass(this.el.nativeElement.querySelector("#detail"), 'active');
            }
            else if (this.currentRoute === "/programmes") {
              this.renderer.addClass(this.el.nativeElement.querySelector("#programmes"), 'active');
              this.renderer.removeClass(this.el.nativeElement.querySelector("#about"), 'active');
              this.renderer.removeClass(this.el.nativeElement.querySelector("#home"), 'active');
              this.renderer.removeClass(this.el.nativeElement.querySelector("#blog"), 'active');
              this.renderer.removeClass(this.el.nativeElement.querySelector("#grid"), 'active');
              this.renderer.removeClass(this.el.nativeElement.querySelector("#detail"), 'active');
            }
            else if (this.currentRoute === "/detail" || this.currentRoute === "/grid") {
              this.renderer.addClass(this.el.nativeElement.querySelector("#blog"), 'active');
              this.renderer.removeClass(this.el.nativeElement.querySelector("#about"), 'active');
              this.renderer.removeClass(this.el.nativeElement.querySelector("#programmes"), 'active');
              this.renderer.removeClass(this.el.nativeElement.querySelector("#home"), 'active');
              if (this.currentRoute === "/detail") {
                this.renderer.addClass(this.el.nativeElement.querySelector("#detail"), 'active');
                this.renderer.removeClass(this.el.nativeElement.querySelector("#grid"), 'active');
              }
              if (this.currentRoute === "/grid") {
                this.renderer.addClass(this.el.nativeElement.querySelector("#grid"), 'active');
                this.renderer.removeClass(this.el.nativeElement.querySelector("#detail"), 'active');
              } 
              
            }
            else {
              this.renderer.addClass(this.el.nativeElement.querySelector("#home"), 'active');
              this.renderer.removeClass(this.el.nativeElement.querySelector("#about"), 'active');
              this.renderer.removeClass(this.el.nativeElement.querySelector("#programmes"), 'active');
              this.renderer.removeClass(this.el.nativeElement.querySelector("#blog"), 'active');
              this.renderer.removeClass(this.el.nativeElement.querySelector("#grid"), 'active');
              this.renderer.removeClass(this.el.nativeElement.querySelector("#detail"), 'active');
            }
        }
    });
  }

  navigateAndScrollToTop(route: string) {
    this.router.navigateByUrl(route).then(() => {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 0);
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: Event): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const navbar = document.querySelector('.navbar');

    if (navbar) {
      if (scrollTop > 45) {
        this.renderer.addClass(navbar, 'sticky-top');
        this.renderer.addClass(navbar, 'shadow-sm');
      } else {
        this.renderer.removeClass(navbar, 'sticky-top');
        this.renderer.removeClass(navbar, 'shadow-sm');
      }
    }
  }

  ngOnInit(): void {
  }

}
