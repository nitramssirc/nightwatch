import { Component, OnInit } from '@angular/core';
import { VideoFileService, Video } from 'src/videoFileService/videoFileService';
import { VideoInfo, VideoType } from 'src/models/videoModels';

@Component({
  template: `
  <div>
    <app-video-player [videoInfo]="randomVideoInfo" [showNext]="true" 
    (nextClick)="handleNextClick()"></app-video-player>  
  </div>
  `
})
export class PlayRandomShowComponent implements OnInit {
  randomVideoInfo: VideoInfo;
  constructor(private videoFileService: VideoFileService) {

  }

  ngOnInit() {
    this.loadRandomShow();
  }

  title = 'Play Random Show';

  handleNextClick(){
    this.loadRandomShow();
  };

  loadRandomShow(){
    this.videoFileService.getRandomVideo().subscribe((vid: Video) => {
      this.randomVideoInfo = new VideoInfo(vid.vidoefile, VideoType.TV);
    });
  }
}

