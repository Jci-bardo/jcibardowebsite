import { Component, OnInit, ElementRef,  ViewChild } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent implements OnInit {

  @ViewChild('counterElement1', { static: true }) counterElement1?: ElementRef;
  @ViewChild('counterElement2', { static: true }) counterElement2?: ElementRef;
  @ViewChild('counterElement3', { static: true }) counterElement3?: ElementRef;

  constructor() { }

  ngOnInit(): void {

    if (this.counterElement1) {
      $(this.counterElement1.nativeElement).counterUp({
        delay: 10,
        time: 2000
      });
    }
    if (this.counterElement2) {
      $(this.counterElement2.nativeElement).counterUp({
        delay: 10,
        time: 2000
      });
    }
    if (this.counterElement3) {
      $(this.counterElement3.nativeElement).counterUp({
        delay: 10,
        time: 2000
      });
    }
  }

}
