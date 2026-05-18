import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { MovieList } from './features/movie-list/movie-list';
import { MovieDetails } from './features/movie-details/movie-details';
import { NotFound } from './features/not-found/not-found';

export const routes: Routes = [
  { path: '', component: Home }, // ruta raíz: '' al componente "Home",
  { path: 'home', redirectTo: '', pathMatch: 'full' }, // ruta de redirección al componente "Home". Trabaja el atributo pathMatch.
  { path: 'movies', component: MovieList }, // ruta 'movies' al componente MovieList,
  { path: 'movies/:movieId', component: MovieDetails }, // ruta dinámica: 'movies/:movieId' al componente MovieDetails,
  { path: '**', component: NotFound }, // ruta comodín:'**' al componente NotFound
];
