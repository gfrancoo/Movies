import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';
import { url } from 'inspector';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: []
})
export class DetailsComponent implements OnInit {
  movie
  recommendations
  id:string

  constructor(private _route: ActivatedRoute, private __http: HttpClient) {
    
   }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id')
    this.findMovie()
    this.findRecommendations()
  }

  findMovie(){
    this.__http.get('https://api.themoviedb.org/3/movie/'+this.id+'?api_key=28a0d9072466fb61d9c60ead94c48450&language=en-US',
    ).subscribe(
      data => {
        console.log(data)
        this.movie = data
      }
    )
  }

  findRecommendations(){
    this.__http.get('https://api.themoviedb.org/3/movie/'+this.id+'/recommendations?api_key=28a0d9072466fb61d9c60ead94c48450&language=en-US&page=1',
    ).subscribe(
      data => {
        console.log("hila")
        this.recommendations = data.results
      }
    )
  }

}
