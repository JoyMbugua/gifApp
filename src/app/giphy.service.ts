import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  private apiKey = environment.trendyKey;

  constructor(private http: HttpClient) { }

  getGifs(){
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${this.apiKey}&limit=50&rating=g`)
  }
  
}

