import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-favlist',
  templateUrl: './favlist.component.html',
  styleUrls: ['./favlist.component.scss']
})
export class FavlistComponent implements OnInit {
  movieList: any = [];
  p: number = 1;
  hidedevref:any;
   @Input() favmovieList:any= [];

  constructor(    private moviesService: MoviesService,
    ) { }

  ngOnInit(): void {
    this.getMovie();
    console.log("Favourite Movies "+ this.favmovieList);
    if(this.movieList.isfavourite === 'true'){
      this.hidedevref=document.getElementsByClassName("card");
      this.hidedevref.style.display="none";
    }
  }
  getMovie() {
    this.movieList = [];
    this.moviesService.getAllMovies().subscribe((data) => {
      data.forEach((element: any) => {
        this.movieList.push(element);
      });
      
    });
    // console.log(localStorage.getItem("favmovie"),'fav movie')
    // console.log(this.movieList,'movie')
    // if(localStorage.getItem("favmovie")){
    // // this.movieList.isfavourite=true;
    // // this.movieList.map((data:any)  => ({ ...data, isfavourite: true }))
    // this.movieList.map( (element:any) => {
    //   element.isfavourite = true;
    //   return element;
    //   // console.log("Property Added " , element);
    // });
   
    // console.log(this.movieList);
    // }
  }

}
