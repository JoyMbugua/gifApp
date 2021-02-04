import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  performSearch(searchTerm: any): void{
    console.log(`the user entered ${searchTerm.value}`)
  }
}
