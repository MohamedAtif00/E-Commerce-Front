import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {


  searchActive = new EventEmitter<boolean>();
  constructor() { }

  SearchActivated(value:boolean)
  {
    this.searchActive.emit(value);
  }
}
