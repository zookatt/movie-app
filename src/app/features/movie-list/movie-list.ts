import { Component, OnInit, inject, signal } from '@angular/core';
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
  movies = signal<MovieInterface[]>([]);

  ngOnInit(): void {
    this.moviesService.getPopularMovies().subscribe((data) => {
      console.log('TMDB movies popular:', data);
      this.movies.set(data);
    });
  }
}
