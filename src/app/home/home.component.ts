import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trendmovieList: any = [];
  alltimePopular:any=[];


  constructor(private moviesService: MoviesService) {  }

  ngOnInit(): void {
   this.gettrendingMovie();
  }
  gettrendingMovie() {
    this.trendmovieList = [];
    this.moviesService.gettrendMovie().subscribe((data) => {
      data.forEach((element: any) => {
        console.log(element,'trending movie');
        this.trendmovieList.push(element);
      });
    });
  }
 
}
