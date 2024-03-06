import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  constructor(private render:Renderer2,private el:ElementRef){}

  addstyel()
  {
    const nativeElement = this.el.nativeElement;

    
  }

}
