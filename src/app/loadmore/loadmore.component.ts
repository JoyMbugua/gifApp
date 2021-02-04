import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-loadmore',
  templateUrl: './loadmore.component.html',
  styleUrls: ['./loadmore.component.css'],
})
export class LoadmoreComponent implements OnInit {
  gifs:[];

  @Output() loadGifs = new EventEmitter<any>();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  loadMore() {
    let link = "https://api.giphy.com/v1/gifs/trending?api_key=6dWqjJfQCC0ycNLLvSH2So23x58zgue1&limit=25&rating=g"
    this.http.get(link).subscribe(response => {
      this.gifs = response.data;
      // this.loadGifs.emit(gifs);
    })
  }
}
