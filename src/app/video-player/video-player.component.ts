import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { VideoInfo } from "src/models/videoModels";
import * as screenfull from "screenfull";
import { Screenfull } from "screenfull";

@Component({
  selector: "app-video-player",
  templateUrl: "./video-player.component.html",
  styleUrls: ["./video-player.component.css"]
})
export class VideoPlayerComponent implements OnInit {
  @Input() videoInfo: VideoInfo;
  @Input() showNext: boolean;
  @Input() showBack: boolean;
  @Output() nextClick = new EventEmitter();
  @Output() backClick = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  handleNextClick() {
    this.nextClick.emit();
  }

  handleBackClick() {
    this.backClick.emit();
  }

  sendElementFullscreen(event: any) {
    const sf = <Screenfull>screenfull;
    if (sf.enabled) {
      sf.request(event.target);
    }
  }

  removeElementFromFullscreen(event: any) {
    const sf = <Screenfull>screenfull;
    if (sf.enabled) {
      sf.exit();
    }
  }
}
