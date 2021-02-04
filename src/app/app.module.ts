import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GifsComponent } from './gifs/gifs.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { LoadmoreComponent } from './loadmore/loadmore.component';

@NgModule({
  declarations: [
    AppComponent,
    GifsComponent,
    HeaderComponent,
    SearchComponent,
    LoadmoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
