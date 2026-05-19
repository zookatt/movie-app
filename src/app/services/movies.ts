import { Injectable } from '@angular/core';
import { MovieInterface } from '../intefaces/movie-interface';

@Injectable({
  providedIn: 'root',
})
export class Movies {private movies: MovieInterface[] = [
    {
      id: '1',
      title: 'Interstellar',
      director: 'Christopher Nolan',
      genre: 'Science Fiction'
    },
    {
      id: '2',
      title: 'Lost in Translation',
      director: 'Sofia Coppola',
      genre: 'Drama'
    },
    {
      id: '3',
      title: 'Love Actually',
      director: 'Richard Curtis',
      genre: 'Romantic Comedy'
    }
  ];

  constructor() {}

  getMovies(): MovieInterface[] {
    return this.movies;
  }

  getMovieById(id: string): MovieInterface | undefined {
    return this.movies.find(movie => movie.id === id);
  }}
