import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostListener,
  ViewChild,
  ElementRef
} from "@angular/core";
import { VideoInfo } from "src/models/videoModels";
import * as screenfull from "screenfull";
import { Screenfull } from "screenfull";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";

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
  @ViewChild("videoPlayer", { static: false }) vidPlayer: ElementRef;
  vlcLink: string;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {}

  handleNextClick() {
    this.videoInfo = null;
    this.nextClick.emit();
  }

  handleBackClick() {
    this.videoInfo = null;
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

  @HostListener("window:keyup", ["$event"])
  keyEvent(event: KeyboardEvent) {
    if (!this.vidPlayer) {
      return;
    }
    if (!this.isPlayButtonKeyPress(event)) {
      return;
    }
    // ignore the play click if the video has already been played
    if (this.vidPlayer.nativeElement.played.length > 0) {
      return;
    }

    this.vidPlayer.nativeElement.play();
  }

  isPlayButtonKeyPress(event: KeyboardEvent) {
    return event && event.code === "MediaPlayPause";
  }

  getVlcLink(): SafeUrl {
    if (!this.videoInfo) { return ""; }

    const vidUrl = window.location.origin + "/" +
      this.videoInfo.src.replace(/ /g, "%20");

    const vlcLink =
      "vlc-x-callback://x-callback-url/download?url=" +
      encodeURIComponent(vidUrl) +
      "&filename=" +
      encodeURIComponent(this.videoInfo.title) +
      ".mp4";

    return this.sanitizer.bypassSecurityTrustUrl(vlcLink);
  }
}
