import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  
  @Output() nameSerie = new EventEmitter<string>;
  textToSearch:string ='';

  getNameToSearch() {
    this.nameSerie.emit(this.textToSearch);
  }
}
