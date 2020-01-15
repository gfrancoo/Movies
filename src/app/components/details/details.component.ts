import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: []
})
export class DetailsComponent implements OnInit {
  movie
  recommendations
  id:string
  ratingMovie:number

  constructor(private _route: ActivatedRoute, private __http: HttpClient) {
    
   }
   
  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id')
    this.findMovie()
    this.findRecommendations()
    //this.rateMovie()
  }

  findMovie(){
    this.__http.get('https://api.themoviedb.org/3/movie/' + this.id + '?api_key=28a0d9072466fb61d9c60ead94c48450&language=en-US',
    ).subscribe(
      data => {
        console.log(data)
        this.movie = data
      }
    )
  }

  findRecommendations(){
    this.__http.get('https://api.themoviedb.org/3/movie/' + this.id + '/recommendations?api_key=28a0d9072466fb61d9c60ead94c48450&language=en-US&page=1',
    ).subscribe(
      (data:any) => {
        this.recommendations = data.results
      }
    )
  }

  reloadPage(){
    this.ngOnInit()
  }

  postRateMovie(){
    let url: string = "https://api.themoviedb.org/3/movie/"+ this.id +"/rating?api_key=28a0d9072466fb61d9c60ead94c48450"
    let json = {
      "value": this.ratingMovie
    }
    
    this.__http.post(url,json).toPromise().then(
      data=>{
        console.log(data)
      },
      error=>{
        console.log(error.error)
      }
    )
  }

  rateMovie(){
    const checkRadioStar = document.querySelector(
      'input[name="star"]:checked'
    )
    if(checkRadioStar == null) return
    
    this.ratingMovie = checkRadioStar.value
    console.log(this.ratingMovie)

    this.postRateMovie()
  }
}
