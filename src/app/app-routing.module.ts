import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GifsComponent } from './gifs/gifs.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'gifs', component: GifsComponent},
  { path: 'search', component: SearchComponent},
  { path: '**', component: GifsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
