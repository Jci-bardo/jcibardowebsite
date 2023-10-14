import { Component, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent implements AfterViewInit {
  @ViewChild('counterElement1') counterElement1?: ElementRef;
  @ViewChild('counterElement2') counterElement2?: ElementRef;
  @ViewChild('counterElement3') counterElement3?: ElementRef;

  membres = 43;
  projets = 9;
  recompences = 11;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.initializeCounter(this.counterElement1, this.membres);
    this.initializeCounter(this.counterElement2, this.projets);
    this.initializeCounter(this.counterElement3, this.recompences);
  }

  initializeCounter(counterElement: ElementRef | undefined, targetValue: number): void {
    if (counterElement) {
      const nativeElement = counterElement.nativeElement;
      const options = {
        delay: 10,
        // Increase the duration for small values
        time: targetValue < 10 ? 2000 : 1000
      };
  
      let current = 0;
  
      // Use a fixed step size
      const step = 1;
  
      const animateCounter = () => {
        current += step;
  
        // Ensure we don't exceed the target value
        if (current >= targetValue) {
          current = targetValue;
        }
  
        this.renderer.setProperty(nativeElement, 'innerText', current.toString());
  
        // Continue the animation until we reach the target value
        if (current < targetValue) {
          requestAnimationFrame(animateCounter);
        }
      };
  
      animateCounter();
    }
  }
}
