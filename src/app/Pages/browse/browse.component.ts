import { tmdbConfig } from './../../constant/config';
import { MovieService } from './../../services/movie.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { MovieCategoryComponent } from '../../components/movie-category/movie-category.component';
import { Movie } from '../../types/movies';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule, HeaderComponent, MovieCategoryComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent {
  MovieService = inject(MovieService);
  popularMovie: Movie[] = [];
  nowPlayingMovie: Movie[] = [];
  topRatedMovie: Movie[] = [];
  upcommingMovie: Movie[] = [];
  bannerMovie !: Movie;
  tmdbConfig = tmdbConfig;
  public domSanitise = inject(DomSanitizer);
  ngOnInit() {
    this.MovieService.getPopularMovies().subscribe((result: any) => {
      console.log(result);
      this.popularMovie = result.results;
      this.bannerMovie = this.popularMovie[0];

      this.MovieService
      .getMoviesVideos(this.bannerMovie.id)
      .subscribe((res: any) => {this.bannerMovie.videoKey = res.results
      .find(
          (x: any) => (x.site = 'YouTube')
          ).key;
          console.log(this.bannerMovie);       
      });
    });

    this.MovieService.getTopRatedMovies().subscribe((result: any) => {
      this.topRatedMovie = result.results;
    });

    this.MovieService.getUpcomingMovies().subscribe((result: any) => {
      this.upcommingMovie = result.results;
    });

    this.MovieService.getNowPlayingMovies().subscribe((result: any) => {
      this.nowPlayingMovie = result.results;
    });
  }
}
