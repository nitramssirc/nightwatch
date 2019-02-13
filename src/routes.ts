import {Routes} from '@angular/router'
import { PlayRandomShowComponent } from "./views/playRandomShow/playRandomShow.component";
import { MovieListComponent } from "./views/movieList/movieList.component";
import { MovieComponent } from './views/movie/movie.component';

export const appRoutes:Routes =[
    {path: 'playRandom', component: PlayRandomShowComponent},
    {path: 'movies', component: MovieListComponent},
    {path: 'movies/:movie', component:MovieComponent},
    {path: '', redirectTo: '/playRandom', pathMatch:'full'}
]