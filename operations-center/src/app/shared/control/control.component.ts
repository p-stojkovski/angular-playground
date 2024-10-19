import { Component, HostBinding, HostListener, input, ViewEncapsulation } from '@angular/core';

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
  @HostListener('click') onClick(){
    console.log('clicked');
  }
  
  label = input.required<string>();
}
