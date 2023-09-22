import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

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
        {id:"assisedeprintemps", titre:"Assise de Printemps", organizer:"JCI Bardo & JCI Tunisie-Zone A", date:"18-19 Mars, 2023", img:"./assets/img/programmes/manifestations/assisesdeprintemps.jpg"},
        {id:"rzpa", titre:"2ème Réunion Zonale des Présidents de la Zone A", organizer:"JCI Bardo & JCI Tunisie-Zone A", date:"", img:"./assets/img/programmes/manifestations/reunionzonalepresidents2.jpg"}
      ]
    },
    {
      text: "Projets Locaux",
      id: 'projets_locaux',
      list: [
        {id:"ecovertemarchevert", titre:"Eco-verte 2.0 : Marché-vert Foire Bio", organizer:"JCI Bardo & Municipalité du Bardo", date:"24 Septembre, 2023", img:"./assets/img/programmes/projetslocaux/marche-vert.jpg"},
        {id:"recrutementksarsaid2", titre:"Recrutement citoyens ksar-Said", organizer:"JCI Bardo", date:"03 Septembre, 2023", img:"./assets/img/programmes/projetslocaux/recrute2.jpg"},
        {id:"journeeenseignants", titre:"Journée des enseignants", organizer:"JCI Bardo & ANETI", date:"21 Août, 2023", img:"./assets/img/programmes/projetslocaux/journée-ens.jpg"},
        {id:"recrutementksarsaid1", titre:"Recrutement citoyens ksar-Said", organizer:"JCI Bardo", date:"17 Juin, 2023", img:"./assets/img/programmes/projetslocaux/recrute.jpg"},
        {id:"emccloture", titre:"Entrepreneurship Masterclass 3.0 : Cérémonie de clôture", organizer:"JCI Bardo & INJAZ Tunisie", date:"04 Juin, 2023", img:"./assets/img/programmes/projetslocaux/cloture emc.jpg"},
        {id:"smallbusinessexpo", titre:"معرض للمشاريع الصغرى", organizer:"JCI Bardo & ANETI", date:"02 Juin, 2023", img:"./assets/img/programmes/projetslocaux/expo.jpg"},
        {id:"santesexuelle", titre:"GrowUP : Journée de sensibilisation sur la santé sexuelle et reproductive", organizer:"JCI Bardo", date:"19 Mai, 2023", img:"./assets/img/programmes/projetslocaux/santesexuelle.jpg"}
      ]
    },
    { 
      text: "Projets Internationaux",
      id: 'projets_internationaux',
      list: [
        {id:"letstalkglobally1", titre:"Let's Talk Globally", organizer:"JCI Aleppo", date:"21-28 Août | 04-11 Septembre, 2023", img:"./assets/img/programmes/projetsinternationaux/talkglobally.jpg"},
        {id:"conferenceaem", titre:"Conférence Afrique Européenne et Moyen Orient", organizer:"JCI Bardo", date:"17 Juin, 2023", img:"./assets/img/programmes/projetsinternationaux/conferenceafrique.jpg"},
        {id:"conferencerd", titre:"Conférence Recover from Disaster", organizer:"International", date:"02 Avril, 2023", img:"./assets/img/programmes/projetsinternationaux/recoveringfromdisaster.jpg"},
        {id:"ecoverteecobleu", titre:"Eco-verte 2.0 : Eco Bleue", organizer:"JCI Bardo", date:"13-15 Mars, 2023", img:"./assets/img/programmes/projetsinternationaux/ecoverte13-15mars.jpg"},
        {id:"vda", titre:"La valorisation des déchets aquatiques", organizer:"JCI Bardo & JCI Ciwara", date:"17 Août, 2022", img:"./assets/img/programmes/projetsinternationaux/la valorisation des déchets aquatiques.jpg"},
        {id:"ecovertevdper", titre:"Eco-verte : Valorisation des déchets & la production d'énergies renouvelables", organizer:"JCI Bardo", date:"06 Mai, 2022", img:"./assets/img/programmes/projetsinternationaux/ecoverte6mai.jpg"},
        {id:"afrotun", titre:"AFROTUN", organizer:"JCI Bardo", date:"21-30-31 Mars, 2021", img:"./assets/img/programmes/projetsinternationaux/afrotun.jpg"},
        {id:"rei", titre:"14ème rassemblement des Étudiants Internationaux", organizer:"JCI Bardo", date:"20 Mars, 2021", img:"./assets/img/programmes/projetsinternationaux/etudiantinternationaux.jpg"}
      ]
    },
    {
      text: "Formations & Forums",
      id: 'formations_forums',
      list: [
        {id:"ecoverteearthforum", titre:"Eco-verte : Resilient earth Forum", organizer:"JCI Bardo & Club'y & Youth", date:"18 Août, 2023", img:"./assets/img/programmes/formationsetforums/earth-forum.jpg"},
        {id:"microsoft", titre:"Formation Microsoft by JCI", organizer:"JCI Bardo", date:"18 Août, 2023", img:'./assets/img/programmes/formationsetforums/micro-jci.jpg'},
        {id:"microsoft", titre:"Formation Microsoft by JCI", organizer:"JCI Bardo", date:"15, 17, 18 Août, 2023", img:'./assets/img/programmes/formationsetforums/ev-micro.jpg'},
        {id:"projectmanagement", titre:"Session recommandée: formation project-management", organizer:"JCI Bardo", date:"13 Août, 2023", img:'./assets/img/programmes/formationsetforums/session-rec.jpg'},
        {id:"cafetalkpsychologie", titre:"Cafe Talk : Psychologie", organizer:"JCI Bardo", date:"05 Août, 2023", img:"./assets/img/programmes/formationsetforums/ev-talk.jpg"},
        {id:"canadianresume", titre:"Formation the A B C’s of a Canadian Resume", organizer:"JCI Bardo", date:"02 Août, 2023", img:'./assets/img/programmes/formationsetforums/canadian-resume.jpg'},
        {id:"jcipresenter", titre:"Formation Session Officielle JCI Presenter", organizer:"JCI Bardo", date:"21 Mai, 2023", img:'./assets/img/programmes/formationsetforums/jci-presenter.jpg'}
      ]
    }
  ];

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
