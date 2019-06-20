import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class VideoFileService{
    rootUrl: string;

    constructor(private http: HttpClient){
        const port = environment.production ? ':3000' : '/api';
        this.rootUrl = window.location.href.split('/').slice(0, 3).join('/') + port + '/';

    }

    getRandomVideo(): Observable<Video>{
        return this.http.get<Video>(this.rootUrl + 'random');
    }

    getMovieList(): Observable<MovieList>{
        return this.http.get<MovieList>(this.rootUrl + 'movies');
    }
}

export class Video{
    vidoefile: string;
}

export class MovieList{
    movies: Movie[];
}

export class Movie{
  displayName: string;
  filename:string;
}
