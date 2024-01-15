import { tmdbConfig } from './../../constant/config';
import { MovieService } from './../../services/movie.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { MovieCategoryComponent } from '../../components/movie-category/movie-category.component';
import { Movie } from '../../types/movies';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule,HeaderComponent,MovieCategoryComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent {
  MovieService = inject(MovieService);
  popularMovie : Movie[] = [];
  nowPlayingMovie : Movie[] = [];
  topRatedMovie : Movie[] = [];
  upcommingMovie : Movie[] = [];
  bannerMovie !: Movie;
  tmdbConfig = tmdbConfig;
  ngOnInit()
  {
    this.MovieService.getPopularMovies().subscribe((result :any) =>{
      console.log(result);
      this.popularMovie =result.results;
      this.bannerMovie = this.popularMovie[0];
    });

    this.MovieService.getNowPlayingMovies().subscribe((result :any) =>{
      console.log(result);
      this.nowPlayingMovie =result.results;
      // this.bannerMovie = this.nowPlayingMovie[17];
    });

    this.MovieService.getTopRatedMovies().subscribe((result :any) =>{
      console.log(result);
      this.topRatedMovie =result.results;

    });

    this.MovieService.getUpcomingMovies().subscribe((result :any) =>{
      console.log(result);
      this.upcommingMovie =result.results;
    });
  }
}
