import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Layout } from './features/layout/layout';
import { MovieDetails } from './features/movie-details/movie-details';
import { MovieList } from './features/movie-list/movie-list';
import { NotFound } from './features/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', component: Home },
      { path: 'home', redirectTo: '', pathMatch: 'full' },
      { path: 'movies', component: MovieList },
      { path: 'movies/:movieId', component: MovieDetails },
    ],
  },
  { path: '**', component: NotFound },
];
