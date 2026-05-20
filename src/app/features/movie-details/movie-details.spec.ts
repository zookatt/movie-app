import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { MovieDetails } from './movie-details';

describe('MovieDetails', () => {
  let component: MovieDetails;
  let fixture: ComponentFixture<MovieDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieDetails],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieDetails);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('movieId', '1');
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
