import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { projets } from '../../constants';

@Component({
  selector: 'app-programmes',
  templateUrl: './programmes.component.html',
  styleUrls: ['./programmes.component.css']
})

export class ProgrammesComponent implements OnInit {
  projets = projets.map((projet) => {
    const newList = projet.list.map((list) => {
      return {...list, id: '#'+list.id }
    })
    return { ...projet, list: newList };
  });

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
