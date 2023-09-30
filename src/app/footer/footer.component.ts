import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router, private renderer: Renderer2) { }

  navigateTo(route: string, id: string) {
    this.router.navigateByUrl(route).then(() => {
      setTimeout(() => {
        const element = this.renderer.selectRootElement(id);
        element.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    });
  }

  navigateAndScrollToTop(route: string) {
    this.router.navigateByUrl(route).then(() => {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 0);
    });
  }

  ngOnInit(): void {
  }

}
