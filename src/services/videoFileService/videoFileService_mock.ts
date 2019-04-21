import { InMemoryDbService, ResponseOptions } from 'angular-in-memory-web-api';

export class videoFileService_mock implements InMemoryDbService {
  random = { id: 0, vidoefile: '/Tv Show/Season 1/Episode Title.mp4' };
  movies =
  {
    id: 0,
    movies: [
      '/Movie 1.mp4',
      '/Movie 2.mp4',
      '/Movie 3.mp4'
    ]
  };

  createDb() {
    return {
        random : this.random,
        movies : this.movies
      };
  }
}
