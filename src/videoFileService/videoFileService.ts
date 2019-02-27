import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class VideoFileService{
    rootUrl:string;

    constructor(private http:HttpClient){
        this.rootUrl = window.location.href.split("/").slice(0,3).join("/") + ":3000";
        
    }
    
    getRandomVideo():Observable<Video>{
        return this.http.get<Video>(this.rootUrl + "/random");
    }

    getMovieList():Observable<MovieList>{
        return this.http.get<MovieList>(this.rootUrl + "/movies");
    }
}

export class Video{
    vidoefile:string
}

export class MovieList{
    movies:string[]
}