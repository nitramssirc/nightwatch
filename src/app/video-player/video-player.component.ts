import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VideoInfo } from 'src/models/videoModels';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  @Input() videoInfo:VideoInfo
  @Input() showNext:boolean
  @Output() nextClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleNextClick(){
    this.nextClick.emit();
  }
}
