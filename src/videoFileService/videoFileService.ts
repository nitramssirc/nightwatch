import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class VideoFileService{
    
    constructor(private http:HttpClient){}
    
    getRandomVideo():Observable<Video>{
        return this.http.get<Video>("http://raspberrypi.:3000/random");
    }

    getMovieList():Observable<MovieList>{
        return this.http.get<MovieList>("http://raspberrypi.:3000/movies");
    }
}

export class Video{
    vidoefile:string
}

export class MovieList{
    movies:string[]
}