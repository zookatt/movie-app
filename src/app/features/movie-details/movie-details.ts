import { Component, computed, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { Movies } from '../../services/movies';
@Component({
  selector: 'app-movie-details',
  imports: [],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.css',
})
export class MovieDetails {
  private router = inject(Router);
  private moviesService = inject(Movies);

  movieId = input.required<string>();
  movie = computed(() => this.moviesService.getMovieById(this.movieId()));

  goBack(): void {
    this.router.navigate(['/movies']);
  }
}
