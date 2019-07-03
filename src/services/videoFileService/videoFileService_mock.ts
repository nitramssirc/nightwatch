import { InMemoryDbService, ResponseOptions } from 'angular-in-memory-web-api';

export class VideoFileServiceMock implements InMemoryDbService {
  random = { id: 0, vidoefile: '/Tv Show/Season 1/Episode Title.mp4' };
  movies =
  {
    id: 0,
    movies: [
      {
        "displayName": "Aladdin",
        "filename": "/Aladdin.mp4"
        },
        {
        "displayName": "Ant Man And The Wasp",
        "filename": "/Ant Man And The Wasp.mp4"
        },
        {
        "displayName": "Aquaman",
        "filename": "/Aquaman.mp4"
        },
        {
        "displayName": "Avengers - Infinity War",
        "filename": "/Avengers - Infinity War.mp4"
        },
        {
        "displayName": "BlacKkKlansman",
        "filename": "/BlacKkKlansman.mp4"
        },
    ]
  };

  createDb() {
    return {
        random : this.random,
        movies : this.movies
      };
  }
}
