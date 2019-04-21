import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';

import { AppComponent } from './app.component';
import { PlayRandomShowComponent } from './views/playRandomShow/playRandomShow.component';
import { MovieListComponent } from './views/movieList/movieList.component';
import { MovieComponent } from './views/movie/movie.component';
import { VideoPlayerComponent } from './app/video-player/video-player.component';
import { VideoListComponent } from './app/video-list/video-list.component';
import { environment } from './environments/environment';

import { VideoFileService } from 'src/services/videoFileService/videoFileService';
import { videoFileService_mock } from './services/videoFileService/videoFileService_mock';

@NgModule({
  declarations: [
    AppComponent,
    PlayRandomShowComponent,
    MovieListComponent,
    MovieComponent,
    VideoPlayerComponent,
    VideoListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {useHash:true}),

    //Mocks
    environment.production ? [] :
      HttpClientInMemoryWebApiModule.forRoot(videoFileService_mock)
  ],
  providers: [VideoFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
