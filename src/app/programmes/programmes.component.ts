import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programmes',
  templateUrl: './programmes.component.html',
  styleUrls: ['./programmes.component.css']
})

export class ProgrammesComponent implements OnInit {
  projets = [
    {
      text: "Manifestations Zonales",
      id: 'manifestations',
      list: [
        {titre:"Assise de Printemps", organizer:"JCI Bardo & JCI Tunisie-Zone A", date:"18-19 Mars, 2023", img:"./assets/img/programmes/manifestations/assisesdeprintemps.jpg"},
        {titre:"2ème Réunion Zonale des Présidents de la Zone A", organizer:"JCI Bardo & JCI Tunisie-Zone A", date:"17 June, 2023", img:"./assets/img/programmes/manifestations/reunionzonalepresidents2.jpg"}
      ]
    },
    {
      text: "Projets Locaux",
      id: 'projets_locaux',
      list: [
        {titre:"معرض للمشاريع الصغرى", organizer:"JCI Bardo & ANETI", date:"02 June, 2023", img:"./assets/img/programmes/projetslocaux/expo.jpg"},
        {titre:"Entrepreneurship Masterclass 3.0 : Cérémonie de clôture", organizer:"JCI Bardo & INJAZ Tunisie", date:"04 June, 2023", img:"./assets/img/programmes/projetslocaux/cloture emc.jpg"},
        {titre:"Recrutement citoyens ksar-Said", organizer:"JCI Bardo", date:"17 June, 2023", img:"./assets/img/programmes/projetslocaux/recrute.jpg"},
        {titre:"Recrutement citoyens ksar-Said", organizer:"JCI Bardo", date:"03 Septembre, 2023", img:"./assets/img/programmes/projetslocaux/recrute2.jpg"}
      ]
    },
    { 
      text: "Projets Internationaux",
      id: 'projets_internationaux',
      list: [
        {titre:"AFROTUN", organizer:"JCI Bardo", date:"21-30-31 Mars, 2021", img:"./assets/img/programmes/projetsinternationaux/afrotun.jpg"},
        {titre:"Eco-verte : Valorisation des déchets & la production d'énergies renouvelables", organizer:"JCI Bardo", date:"06 Mai, 2022", img:"./assets/img/programmes/projetsinternationaux/ecoverte6mai.jpg"},
        {titre:"La valorisation des déchets aquatiques", organizer:"JCI Bardo & JCI Ciwara", date:"17 Août, 2022", img:"./assets/img/programmes/projetsinternationaux/la valorisation des déchets aquatiques.jpg"},
        {titre:"Eco-verte 2.0 : Eco Bleue", organizer:"JCI Bardo", date:"13-15 Mars, 2023", img:"./assets/img/programmes/projetsinternationaux/ecoverte13-15mars.jpg"},
        {titre:"Conférence afrique européenne et moyen orient", organizer:"JCI Bardo & JCI Innova & JCI Fraternité & JCI U dakar Espoir & JCI Yaounde Excel", date:"17 June, 2023", img:"./assets/img/programmes/projetsinternationaux/conferenceafrique.jpg"}
      ]
    },
    {
      text: "Formations & Forums",
      id: 'formations_forums',
      list: [
        {titre:"Cafe Talk", organizer:"JCI Bardo", date:"05 Aout, 2023", img:"./assets/img/programmes/formationsetforums/ev-talk.jpg"},
        {titre:"Eco-verte : Resilient earth Forum", organizer:"JCI Bardo & Club'y & Youth", date:"18 Aout, 2023", img:"./assets/img/programmes/formationsetforums/earth-forum.jpg"}
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
