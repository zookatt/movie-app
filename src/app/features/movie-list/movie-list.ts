import { Component, OnInit, inject } from '@angular/core';
import { Movies } from '../../services/movies';
import { MovieInterface } from '../../intefaces/movie-interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  imports: [RouterLink],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList implements OnInit {
  private moviesService = inject(Movies);

  movies: MovieInterface[] = [];

  ngOnInit(): void {
    this.movies = this.moviesService.getMovies();
  }
}
