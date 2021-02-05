import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

 results: [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  performSearch(searchTerm) {
    let apiLink: string = `https://api.giphy.com/v1/gifs/search?api_key=${environment.trendyKey}&q=${searchTerm}&limit=50&offset=0&rating=g&lang=en`;

    this.http.get(apiLink).subscribe(data=> {
      // Succesful API request
      this.results = data['data'];
    },err=>{
        alert('Not found')
    })
  }
}
