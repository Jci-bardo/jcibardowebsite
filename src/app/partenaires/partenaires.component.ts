import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-partenaires',
  templateUrl: './partenaires.component.html',
  styleUrls: ['./partenaires.component.css']
})
export class PartenairesComponent implements OnInit {

  carouselItems = [
    // Define your carousel items here
    {img:'../../assets/img/partenaires/bayrem.jpg', title:"Lycée Bayrem Tounsi"},
    {img:'../../assets/img/partenaires/centre.jpg', title:"Centre Integré de Jeunesse et d'Enfance Bardo"},
    {img:'../../assets/img/partenaires/injaz.jpg', title:"INJAZ Tunis"},
    {img:'../../assets/img/partenaires/youth.jpg', title:"YOUTH FOR CLIMATE Tunisia"},
    {img:'../../assets/img/partenaires/jeune.png', title:"Maison de Jeunesse Khaznadar"},
    {img:'../../assets/img/partenaires/cluby.jpg', title:"Club'y"},
    {img:'../../assets/img/partenaires/iri.jpg', title:"International Republican Institut"},
    {img:'../../assets/img/partenaires/nt.jpg', title:"Nextun Agency"},
    {img:'../../assets/img/partenaires/femme.jpg', title:"Association des Femmes Arabes Spécialisées"},
    {img:'../../assets/img/partenaires/saad.jpg', title:"Institut Saad"},
    {img:'../../assets/img/partenaires/aneti.png', title:"ANETI Bardo"},
    {img:'../../assets/img/partenaires/himo.jpg', title:"Association Tunisienne de l'Himophilie"},
    {img:'../../assets/img/partenaires/biblio.jpg', title:"Bibliothèque Publique du Bardo"},
    {img:'../../assets/img/partenaires/munici.png', title:"Municipalité du Bardo"}
  ];

  carouselConfig: OwlOptions = {
    autoplay: true,
    smartSpeed: 1500,
    dots: true,
    loop: true,
    center: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
  }
}
