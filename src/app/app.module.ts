import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DetailsComponent } from './components/details/details.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll'
import { NgxSpinnerModule } from 'ngx-spinner';
import { SeriesComponent } from './components/series/series.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    DetailsComponent,
    SeriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
