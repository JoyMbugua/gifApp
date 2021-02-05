import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Gif } from '../gif-class/gif';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {

  giphies: [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    let promise: any = new Promise((resolve, reject) => {
      this.http.get(environment.trendyUrl).toPromise().then(response => {
        this.giphies = response.data;
        console.log(this.giphies)
        resolve(response)
      }, error => {
        console.log(error);
        reject(error);
      })
    })

    return promise;
  }

}
