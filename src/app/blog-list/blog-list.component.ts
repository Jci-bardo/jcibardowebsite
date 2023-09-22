import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogs = [
    {id:"ecovertemarchevert", titre:"Marché-vert : Foire Bio", place:"Le Bardo", date:"24 Septembre, 2023", img:'./assets/img/programmes/projetslocaux/marche-vert.jpg'},
    {id:"recrutementksarsaid2", titre:"Recrutement Citoyens Ksar-Said", place:"Municipalité du Bardo", date:"03 Septembre, 2023", img:'./assets/img/programmes/projetslocaux/recrute2.jpg'},
    {id:"ecoverteearthforum", titre:"Eco-verte 2.0 : Resilient earth Forum", place:"Le Bardo", date:"18 Août, 2023", img:'./assets/img/programmes/formationsetforums/earth-forum.jpg'},
    {id:"microsoftbyjci2", titre:"Formation Microsoft by JCI", place:"sur Zoom", date:"18 Août, 2023", img:'./assets/img/programmes/formationsetforums/micro-jci.jpg'},
    {id:"microsoftbyjci1", titre:"Formation Microsoft by JCI", place:"sur Zoom", date:"15, 17, 18 Août, 2023", img:'./assets/img/programmes/formationsetforums/ev-micro.jpg'},
    {id:"projectmanagement", titre:"Session recommandée: formation project-management", place:"Municipalité du Bardo", date:"13 Août, 2023", img:'./assets/img/programmes/formationsetforums/session-rec.jpg'},
    {id:"cafetalkpsychologie", titre:"Café Talk... هيا نحكيو Psychologie", place:"Bonzai coffee lounge le bardo", date:"05 Août, 2023", img:'./assets/img/programmes/formationsetforums/ev-talk.jpg'}
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
