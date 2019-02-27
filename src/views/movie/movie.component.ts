import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoInfo, VideoType } from 'src/models/videoModels';

@Component({
  template: `
  <div>
    <app-video-player [videoInfo]="movieInfo"></app-video-player>
  </div>
  `,
})
export class MovieComponent {
  movieInfo: VideoInfo;
  constructor(private route: ActivatedRoute) {
    this.movieInfo = new VideoInfo(this.route.snapshot.params['movie'], VideoType.Movie);
  }
}

