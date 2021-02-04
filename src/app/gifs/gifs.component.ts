import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Gif } from '../gif-class/gif';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {
  gif: Gif;
  link: string = "https://api.giphy.com/v1/gifs/trending?api_key=6dWqjJfQCC0ycNLLvSH2So23x58zgue1&limit=50&rating=g";
  giphies: [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    interface apiResponse{
      images: any;
      downsized: any;
    }

    this.http.get(this.link).subscribe(
      response => {
        this.giphies = response.data;
        console.log(this.giphies);
      }
    )
  }

}
