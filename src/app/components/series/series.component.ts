import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  page = 1
  private allSeries :Object[] = []

  constructor(private __http: HttpClient) { 
  }

  ngOnInit() {
    this.getSeries()
  }

  getSeries(){
    this.__http.get('https://api.themoviedb.org/3/tv/popular?api_key=28a0d9072466fb61d9c60ead94c48450&language=en-US&page=' + this.page,
    ).subscribe(
      data => {
        this.allSeries.push(data.results)
        console.log(this.allSeries)
      }
    )
  }

  onScroll(){
    this.page++
    console.log("Scrolled" + this.page)
    this.getSeries()
  }
}
