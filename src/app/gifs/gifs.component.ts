import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Gif } from '../gif-class/gif';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { environment } from '../../environments/environment';
import { GiphyService } from '../giphy.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {

  giphies: [];

  constructor(private service: GiphyService) { }

  ngOnInit(): void {

    this.service.getGifs().subscribe(response => {
      this.giphies = response['data'];
    })
  }

}
