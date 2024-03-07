import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  isPopperStatic:boolean= false;

  constructor(private render:Renderer2,private el:ElementRef){}

  ngOnInit(): void {
   
  }


  addstyel()
  {
    const nativeElement = this.el.nativeElement;

    
  }

  dropendClicked()
  {
    this.isPopperStatic = !this.isPopperStatic
  }

}
