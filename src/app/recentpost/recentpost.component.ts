import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { recents, projets } from 'src/constants';

@Component({
  selector: 'app-recentpost',
  templateUrl: './recentpost.component.html',
  styleUrls: ['./recentpost.component.css']
})
export class RecentpostComponent implements OnInit {
  //recents = recents;
  recents = projets.find((projet) => projet.id === 'projets_locaux')?.list.slice(0, 3).map((list) => {
    return { ...list, id:'#'+list.id }
  })

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
