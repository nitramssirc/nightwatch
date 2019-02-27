import { Component, OnInit } from '@angular/core';
import { VideoFileService, Video, MovieList } from 'src/videoFileService/videoFileService';

@Component({
  templateUrl: './movieList.component.html',
})
export class MovieListComponent implements OnInit {
  movieList:movieListIten[];
  constructor(private videoFileService:VideoFileService){
    
  }

  ngOnInit(){
    this.videoFileService.getMovieList().subscribe((movies:MovieList)=>{
      this.movieList = [];
      for(var i=0; i<movies.movies.length; i++){
        this.movieList.push(new movieListIten(movies.movies[i]))
      }
      console.log(this.movieList);
    });
  }

  title = 'Movies';
}

export class movieListIten{
  displayName:string;
  filename:string;

  constructor(movie:string){
    this.filename = movie;
    this.displayName = movie.slice(1, movie.length-4)
  }
}