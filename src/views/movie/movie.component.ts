import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './movie.component.html',
})
export class MovieComponent{
  movieTitle:string;
  movieSrc:string
  constructor(private route:ActivatedRoute){
    this.movieTitle = this.route.snapshot.params['movie'];
    this.movieSrc = "assets/videos/Landry Movies" + this.movieTitle; 
  }
}

