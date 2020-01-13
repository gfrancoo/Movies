import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent implements OnInit {
  
  constructor(private __http: HttpClient) { 
  }
  private movies

  ngOnInit() {
    this.getMovies();
  }

  holas(){
    console.log("Gaaaa")
  }

  getMovies(){
    this.__http.get('https://api.themoviedb.org/3/movie/popular?api_key=28a0d9072466fb61d9c60ead94c48450&language=en-US&page=1',
    ).subscribe(
      data => {
        console.log(data.results)
        this.movies = data.results
      }
    )
  }
}
