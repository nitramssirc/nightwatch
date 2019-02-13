import { Component, OnInit } from '@angular/core';
import { VideoFileService, Video, MovieList } from 'src/videoFileService/videoFileService';

@Component({
  templateUrl: './movieList.component.html',
})
export class MovieListComponent implements OnInit {
  movieList:string[];
  constructor(private videoFileService:VideoFileService){
    
  }

  ngOnInit(){
    this.videoFileService.getMovieList().subscribe((movies:MovieList)=>{
      this.movieList = movies.movies;
      console.log(movies.movies);
    });
  }

  title = 'Movies';
}
