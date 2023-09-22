import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recentpost',
  templateUrl: './recentpost.component.html',
  styleUrls: ['./recentpost.component.css']
})
export class RecentpostComponent implements OnInit {
  recents = [
    {id:"#journeeinformation", titre:"Participation à la journée d'information", img:'./assets/img/grid/journée-information.jpg'},
    {id:"#jcipresenter", titre:"Formation Session Officielle JCI Presenter", img:'./assets/img/programmes/formationsetforums/jci presenter.jpg'},
    {id:"#santesexuelle", titre:"Journée sensibilisation sur la santé sexuelle et reproductive", img:'./assets/img/programmes/projetslocaux/sensibilisation.jpg'}
  ]
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
