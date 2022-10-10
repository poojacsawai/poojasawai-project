import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit, TemplateRef } from '@angular/core';

import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  p: number = 1;
  modalRef?: BsModalRef | null;
  modalRef2?: BsModalRef;

  movieList: any = [];
  name: any = null;
  items: any;
  filteredItems: any;
  movieDetails: any;
  constructor(
    private moviesService: MoviesService,
    private modalService: BsModalService
  ) {}
 
  // isReadMore = true

  // showText() {
  //    this.isReadMore = !this.isReadMore
  // }

  ngOnInit(): void {
    this.getMovie();
  }

  openModal(template: TemplateRef<any>, movie: any) {
    this.movieDetails = movie;
    this.modalRef = this.modalService.show(template, {
      id: 1,
      class: 'modal-lg',
    });
  }

  closeFirstModal() {
    if (!this.modalRef) {
      return;
    }

    this.modalRef.hide();
    this.modalRef = null;
  }

  getMovie() {
    this.movieList = [];
    this.moviesService.getAllMovies().subscribe((data) => {
      data.forEach((element: any) => {
        console.log(element);
        this.movieList.push(element);
      });
    });
  }

  serachMovies() {
    if (this.name) {
      this.movieList = this.movieList.filter((movie: any) => {
        return movie.Title.toLowerCase().match(this.name.toLowerCase());
      });
    } else {
      this.getMovie();
    }
  }

  sortData(property: any) {
    return this.movieList.sort((a: any, b: any) =>
      a[property].localeCompare(b[property])
    );
  }
}
