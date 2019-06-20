import { Component, OnInit } from "@angular/core";
import {
  VideoFileService,
  MovieList
} from "src/services/videoFileService/videoFileService";
import { VideoListItem } from "src/models/videoModels";

@Component({
  template: `
    <div>
      <app-video-list
        [videoList]="movieList"
        [routerPath]="rp"
        [showPlayRandom]="playRandom"
      ></app-video-list>
    </div>
  `
})
export class MovieListComponent implements OnInit {
  movieList: VideoListItem[];
  rp = "/movies";
  playRandom = true;
  title = "Movies";

  constructor(private videoFileService: VideoFileService) {}

  ngOnInit() {
    this.videoFileService.getMovieList().subscribe((movies: MovieList) => {
      this.movieList = [];
      for (let i = 0; i < movies.movies.length; i++) {
        const movie = movies.movies[i];
        this.movieList.push(
          new VideoListItem(movie.displayName, movie.filename)
        );
      }
    });
  }
}
