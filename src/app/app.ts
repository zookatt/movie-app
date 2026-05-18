import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Home } from './features/home/home';
import { MovieDetails } from './features/movie-details/movie-details';
import { MovieList } from './features/movie-list/movie-list';
import { NotFound } from './features/not-found/not-found';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Home,
    MovieDetails,
    MovieList,
    NotFound,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('movie-app');
}
