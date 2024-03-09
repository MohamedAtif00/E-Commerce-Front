import { Component, OnInit } from '@angular/core';
import { SearchService } from './Shared/Search/search.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'E-Commerce';
  searchActive:boolean  = false;



  constructor(private search:SearchService){}

  ngOnInit(): void {
    this.search.searchActive.subscribe((value) =>{
      this.searchActive = value;
    });
  }

}
