import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { MovieInterface } from '../intefaces/movie-interface';
import { environment } from '../enviroments/enviroments';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Movies {
  private readonly http = inject(HttpClient);
  private readonly tmdbUrl = environment.tmdbUrl;
  private readonly tmdbToken = environment.tmdbToken;
  private readonly tmdbImg = environment.tmdbImg;
  private movies: MovieInterface[] = [];

  getPopularMovies() {
    return this.http
      .get<MovieInterface[]>(this.tmdbUrl, {
        headers: {
          Authorization: `Bearer ${this.tmdbToken}`,
        },
      })
      .pipe(
        map((data: any) =>
          data.results.map((e: any) => ({
            ...e,
            poster_path: this.tmdbImg.concat(e.poster_path),
          })),
        ),
      );
  }

  getMovies(): MovieInterface[] {
    return this.movies;
  }

  getMovieById(id: string): MovieInterface | undefined {
    return this.movies.find((movie) => movie.id === id);
  }
}
