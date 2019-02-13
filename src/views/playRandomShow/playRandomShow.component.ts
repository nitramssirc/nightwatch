import { Component, OnInit } from '@angular/core';
import { VideoFileService, Video } from 'src/videoFileService/videoFileService';

@Component({
  templateUrl: './playRandomShow.component.html',
})
export class PlayRandomShowComponent implements OnInit {
  randomVideoTitle:string;
  randomVideoSrc:string;
  constructor(private videoFileService:VideoFileService){
    
  }

  ngOnInit(){
    this.videoFileService.getRandomVideo().subscribe((vid:Video)=>{
      this.randomVideoTitle = vid.vidoefile;
      this.randomVideoSrc = "assets/videos/TV" + vid.vidoefile;
    });
  }

  title = 'Play Random Show';
}

