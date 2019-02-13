import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';

import { AppComponent } from './app.component';
import { VideoFileService } from 'src/videoFileService/videoFileService';
import { PlayRandomShowComponent } from './views/playRandomShow/playRandomShow.component';
import { MovieListComponent } from './views/movieList/movieList.component';
import { MovieComponent } from './views/movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayRandomShowComponent,
    MovieListComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {useHash:true})
  ],
  providers: [VideoFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
