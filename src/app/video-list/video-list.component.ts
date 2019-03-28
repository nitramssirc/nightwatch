import { Component, OnInit, Input } from '@angular/core';
import { VideoListItem } from 'src/models/videoModels';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  @Input() videoList:VideoListItem[]
  @Input() routerPath: string
  @Input() showPlayRandom:boolean

  constructor() { }

  ngOnInit() {
  }

}
