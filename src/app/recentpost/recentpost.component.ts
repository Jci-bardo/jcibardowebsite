import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { recents, projets } from 'src/constants';

@Component({
  selector: 'app-recentpost',
  templateUrl: './recentpost.component.html',
  styleUrls: ['./recentpost.component.css']
})
export class RecentpostComponent implements OnInit {
  recents = this.getRecent();
  /*recents = projets.find((projet) => projet.id === 'projets_locaux')?.list.slice(0, 3).map((list) => {
    return { ...list, id:'#'+list.id }
  })*/

  getRecent() {
    let blogs = projets.map(projet => projet.list).flat();
    blogs.sort(function(a, b) {
      let a_date = new Date(a.date_range[a.date_range.length-1]);
      let b_date = new Date(b.date_range[b.date_range.length-1]);
      return b_date.getTime() - a_date.getTime();
    });
    const result = blogs.slice(0, 3).map((blog) => {
      return { ...blog, id:'#'+blog.id }
    });
    return result;
  }

  constructor(private router: Router, private renderer: Renderer2) {
    this.getRecent();
  }

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
