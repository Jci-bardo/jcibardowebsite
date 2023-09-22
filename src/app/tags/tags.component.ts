import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  constructor(private router: Router, private renderer: Renderer2) { }

  navigateTo(route: string, id: string) {
    this.router.navigateByUrl(route).then(() => {
      setTimeout(() => {
        const element = this.renderer.selectRootElement(id);
        element.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    });
  }

  ngOnInit(): void {
  }

}
