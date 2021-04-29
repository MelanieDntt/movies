import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';
import { MovieDetails } from 'src/model/movie.modele';
import { MovieRequest} from 'src/model/movies.modele';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trendingList= [];
 
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService
      .sendGetRequestTrending()
      .subscribe((data: any[]) => {
        this.trendingList = data;
        console.log(data);
      })  
    
    // this.dataService
    //   .getMovieList('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6ac627c370d23ed87072bba32feff0e8')
    //   .then(data => this.movieList = data);
  }

}
