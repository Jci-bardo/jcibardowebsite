import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogs = [
    {id:"ecovertemarchevert", titre:"Marché-vert : Foire Bio", place:"Le Bardo", date:"24 Septembre, 2023", img:"./assets/img/programmes/projetslocaux/marche-vert.jpg"},
    {id:"recrutementksarsaid2", titre:"Recrutement citoyens ksar-Said", place:"Municipalité du Bardo", date:"03 Septembre, 2023", img:"./assets/img/programmes/projetslocaux/recrute2.jpg"},
    {id:"journeeenseignants", titre:"Journée des enseignants", place:"Bureau d'emploi de Bardo", date:"21 Août, 2023", img:"./assets/img/programmes/projetslocaux/journée-ens.jpg"},
  ]

  constructor() { }



  ngOnInit(): void {
  }

}
