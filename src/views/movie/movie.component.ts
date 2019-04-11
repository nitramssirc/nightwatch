import { Component } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { VideoInfo, VideoType } from 'src/models/videoModels';

@Component({
  template: `
  <div>
    <app-video-player 
      [videoInfo]="movieInfo"
      [showBack]="true"
      (backClick)="handleBackClick()"
    ></app-video-player>
  </div>
  `,
})
export class MovieComponent {
  movieInfo: VideoInfo;
  constructor(private route: ActivatedRoute, private _location: Location) {
    this.movieInfo = new VideoInfo(this.route.snapshot.params['movie'], VideoType.Movie);
  }

  handleBackClick(){
    this._location.back();
  }
}

