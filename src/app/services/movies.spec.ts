import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { Movies } from './movies';

describe('Movies', () => {
  let service: Movies;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(Movies);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
