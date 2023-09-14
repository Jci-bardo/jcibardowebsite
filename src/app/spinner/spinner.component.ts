import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
 
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
      setTimeout(() => {
        const spinnerElement = this.el.nativeElement.querySelector('#spinner');
        if (spinnerElement) {
            this.renderer.removeClass(spinnerElement, 'show');
        }
      }, 1);
  };
}
