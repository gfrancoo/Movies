import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent implements OnInit {
  page = 1

  constructor(private __http: HttpClient) { 
  }
  private movies
  private allMovies :Object[] = []

  ngOnInit() {
    this.getMovies();
  }

  getMovies(){
    this.__http.get('https://api.themoviedb.org/3/movie/popular?api_key=28a0d9072466fb61d9c60ead94c48450&language=en-US&page=' + this.page,
    ).subscribe(
      data => {
        //console.log(data.results)
        this.movies = data.results
        this.allMovies.push(data.results)
        //console.log(this.allMovies)
      }
    )
  }

  onScroll(){
    this.page++
    console.log("Scrolled" + this.page)
    this.getMovies()
  }
}
