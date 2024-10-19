import { Component, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
  }
})
export class ControlComponent {
  label = input.required<string>();
  private el = inject(ElementRef);

  @HostListener('click') onClick(){
    console.log('clicked');
    console.log(this.el);
  }
}
