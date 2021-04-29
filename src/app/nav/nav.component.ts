import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  // private search_api_link: string = 'https://api.themoviedb.org/3/search/multi?api_key=6ac627c370d23ed87072bba32feff0e8';
  // form = document.querySelector('.form');
  // search: any = document.querySelector('#search');
  // searchTerm = this.search.value;

  constructor() { 
    // this.showMovies();
  }

  ngOnInit(): void {
    // this.form.addEventListener('submit', (e) => {
    //   e.preventDefault();

    //   if (this.searchTerm) {
    //     showMovies(this.search_api_link + this.searchTerm);
    //     this.search.value = "";
    //   }
    // });
  }

}
