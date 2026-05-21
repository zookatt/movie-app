export interface MovieInterface {
  id: string;
  title: string;
  overview: string;
  poster_path: string;
}


export interface TmdbMovie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
}

export interface TmdbPopularResponse {
  results: TmdbMovie[];
}
