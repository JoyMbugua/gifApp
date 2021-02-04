import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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

  performSearch(searchTerm: string): void{
    let apiLink: string = `https://api.giphy.com/v1/gifs/search?api_key=Cb70lMkZKb7Wpz0mRsEAdQ694gsjQ00t&q=${searchTerm}&limit=50&offset=0&rating=g&lang=en`;

    this.http.get(apiLink).subscribe(response => {
      this.results = response.data;
      // console.log(this.results)
      return this.results;
    })
  }
}
