import { Component, OnInit } from '@angular/core';
import { VideoFileService, MovieList } from 'src/videoFileService/videoFileService';
import { VideoListItem } from 'src/models/videoModels';

@Component({
  template: `
  <div>
    <app-video-list [videoList]="movieList" [routerPath]=rp [showPlayRandom]=playRandom></app-video-list>
  </div>
  `,
})
export class MovieListComponent implements OnInit {
  movieList:VideoListItem[];
  rp = "/movies";
  playRandom = true;

  constructor(private videoFileService:VideoFileService){
    
  }

  ngOnInit(){
    this.videoFileService.getMovieList().subscribe((movies:MovieList)=>{
      this.movieList = [];
      for(var i=0; i<movies.movies.length; i++){
        var filename = movies.movies[i];
        this.movieList.push(new VideoListItem(filename.slice(1, filename.length-4), filename))
      }
    });
  }

  title = 'Movies';
}
