import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { projets } from '../../constants';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogsample = projets.find((projet) => projet.id === 'projets_locaux')?.list.slice(0, 3).map((list) => {
    return { ...list, id:'#'+list.id }
  })

  /*blogsample = [
    {id:"#ecovertemarchevert", titre:"Marché-vert : Foire Bio", place:"Le Bardo", date:"24 Septembre, 2023", img:"./assets/img/programmes/projetslocaux/marche-vert.jpg"},
    {id:"#recrutementksarsaid2", titre:"Recrutement citoyens ksar-Said", place:"Municipalité du Bardo", date:"03 Septembre, 2023", img:"./assets/img/programmes/projetslocaux/recrute2.jpg"},
    {id:"#journeeenseignants", titre:"Journée des enseignants", place:"Bureau d'emploi de Bardo", date:"21 Août, 2023", img:"./assets/img/programmes/projetslocaux/journée-ens.jpg"},
  ]*/

  constructor(private router : Router, private renderer: Renderer2) { }

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
