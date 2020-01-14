import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';
import { url } from 'inspector';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: []
})
export class DetailsComponent implements OnInit {
  movie
  id:string
  url: string = 'https://api.themoviedb.org/3/movie/'

  constructor(private _route: ActivatedRoute, private __http: HttpClient) {
    
   }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id')
    this.url = this.url.concat(this.id,'?api_key=28a0d9072466fb61d9c60ead94c48450&language=en-US')
    console.log(this.url.concat(this.id,'?api_key=28a0d9072466fb61d9c60ead94c48450&language=en-US'))
    this.findMovie()
  }

  findMovie(){
    console.log("Hola")
    this.__http.get(this.url,
    ).subscribe(
      data => {
        console.log(data)
        this.movie = data
      }
    )
  }

}
