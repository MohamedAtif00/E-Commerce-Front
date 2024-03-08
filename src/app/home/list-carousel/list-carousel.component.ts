import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-carousel',
  templateUrl: './list-carousel.component.html',
  styleUrls: ['./list-carousel.component.css']
  
})
export class ListCarouselComponent {

  show:number = 0;

  
  clicked()
  {
    let elements = document.getElementsByClassName("carousel-item") ;
    let elementsArray = Array.from(elements);

    // for(var element of elementsArray)
    // {
    //   if(!element.classList.contains('active'))
    //   {
    //     setTimeout(() => {
    //       element.classList.add('d-flex')
          
    //     }, 500);
    //   }else{
    //     element.classList.remove('d-flex')
    //   }
    // }
  }
  

  next()
  {
    
    let element = document.getElementsByClassName('slidee');
    if(!(this.show < -100) ) {
      
      console.log(this.show);
      
        this.show-= 100;
        let elements = Array.from(element);
        elements.forEach((e)=>{
          let myelement = e as HTMLElement;
          myelement.style.transform = `translateX(${this.show}%)`;
          
        });

    }

    

  }

  prev()
  {
    if((this.show != 0) ) {
    {
      let element = document.getElementsByClassName('slidee');
      let elements = Array.from(element);
      this.show+= 100
      
      elements.forEach((e)=>{
        let myelement = e as HTMLElement;
        myelement.style.transform = `translateX(${this.show}%)`;
        
        });

      }
    }else{
      this.show = 0;
    }
  }

  hoverdeactive(){
    let next = document.getElementById('next') as HTMLElement;
    let prev = document.getElementById('prev') as HTMLElement;
    next.style.transition = 'opacity 0.5s ease 0.5s'
    prev.style.transition = 'opacity 0.5s ease 0.5s'
    if(next.style.opacity != '0') next.style.opacity = '0';
    if(prev.style.opacity != '0') prev.style.opacity = '0';
  }

  hoveractive()
  {
    let next = document.getElementById('next') as HTMLElement;
    let prev = document.getElementById('prev') as HTMLElement;
    next.style.transition = 'opacity 0.5s ease 0.5'
    prev.style.transition = 'opacity 0.5s ease 0.5'
    if(next.style.opacity != '1') next.style.opacity = '1';
    if(prev.style.opacity != '1') prev.style.opacity = '1';
  }

}
