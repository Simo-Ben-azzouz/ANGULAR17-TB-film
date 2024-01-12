import { MovieService } from './../../services/movie.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { MovieCategoryComponent } from '../../components/movie-category/movie-category.component';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule,HeaderComponent,MovieCategoryComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent {
  MovieService = inject(MovieService);
  popularMovie : any[] = [];
  nowPlayingMovie : any[] = [];
  topRatedMovie : any[] = [];
  upcommingMovie : any[] = [];
  ngOnInit()
  {
    this.MovieService.getPopularMovies().subscribe((result :any) =>{
      console.log(result);
      this.popularMovie =result.results;
    });

    this.MovieService.getNowPlayingMovies().subscribe((result :any) =>{
      console.log(result);
      this.nowPlayingMovie =result.results;
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
