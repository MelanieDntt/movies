import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieDetails } from 'src/model/movie.modele';
import { MovieRequest } from 'src/model/movies.modele';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private most_popular_api_link: string = 'https://api.themoviedb.org/3/discover/movie?tv?sort_by=popularity.desc&api_key=6ac627c370d23ed87072bba32feff0e8';
  private trending_api_link:string = 'https://api.themoviedb.org/3/trending/all/week?api_key=6ac627c370d23ed87072bba32feff0e8';

  private most_popular_movie_api_link: string = 'https://api.themoviedb.org/3/movie/popular?api_key=6ac627c370d23ed87072bba32feff0e8';
  private trending_movie_api_link: string = 'https://api.themoviedb.org/3/trending/movie/week?api_key=6ac627c370d23ed87072bba32feff0e8';
  private upcoming_movie_api_link: string = 'https://api.themoviedb.org/3/movie/upcoming?api_key=6ac627c370d23ed87072bba32feff0e8';

  private most_popular_serie_api_link: string = 'https://api.themoviedb.org/3/tv/popular?api_key=6ac627c370d23ed87072bba32feff0e8';
  private trending_serie_api_link: string = 'https://api.themoviedb.org/3/trending/tv/week?api_key=6ac627c370d23ed87072bba32feff0e8s';
  private on_the_air_serie_api_link: string = 'https://api.themoviedb.org/3/tv/on_the_air?api_key=6ac627c370d23ed87072bba32feff0e8';
  
  constructor(private httpClient: HttpClient) { }

  // getMovieList(url: string){
  //   return this.httpClient
  //       .get<MovieRequest>(url)
  //       .toPromise();
  // }

  // getMovieDetails(url: string) {
  //   return this.httpClient
  //     .get<MovieDetails>(url)
  //     .toPromise();
  // }

  public sendGetRequestMostPopular () {
    return this.httpClient.get(this.most_popular_api_link);
  }
  public sendGetRequestTrending () {
    return this.httpClient.get(this.trending_api_link);
  }


  public sendGetRequestMostPopularMovie () {
    return this.httpClient.get(this.most_popular_movie_api_link);
  }
  public sendGetRequestTrendingMovie () {
    return this.httpClient.get(this.trending_movie_api_link);
  }
  public sendGetRequestUpcomingMovie () {
    return this.httpClient.get(this.upcoming_movie_api_link);
  }


  public sendGetRequestMostPopularSerie () {
    return this.httpClient.get(this.most_popular_serie_api_link);
  }
  public sendGetRequestTrendingSerie () {
    return this.httpClient.get(this.trending_serie_api_link);
  }
  public sendGetRequestOnAirSerie () {
    return this.httpClient.get(this.on_the_air_serie_api_link);
  }
}
