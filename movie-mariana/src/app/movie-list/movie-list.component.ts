import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {

  movie_data = [
    {title : "He Got Game", geners : ['Drama','Sport'], showtime: new Date('12/06/2023') , rating : 1, release: 2018, metRating: 3, runtime : 2.6, poster : "https://m.media-amazon.com/images/M/MV5BMDEzZjM2ZmItODczNC00OGE3LWE3YTEtMTA3OWZiNTkwYmI1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX960_.jpg"},
    {title : "Babylon", geners : ['Drama'], showtime: new Date('10/07/2023') , rating : 1, release: 2018, metRating: 3, runtime : 2.6, poster : "https://m.media-amazon.com/images/M/MV5BODAwMDhmOTctOGRkMi00NWJhLWE5ZmYtNTk0YWY4YTJkZTkxXkEyXkFqcGdeQXVyMjI3NDAyNg@@._V1_FMjpg_UY2000_.jpg"},
    {title : "Rockers", geners : ['Drama','Music','Comedy'], showtime: new Date('05/07/2023') , rating : 1, release: 2018, metRating: 3, runtime : 2.6, poster : "https://m.media-amazon.com/images/M/MV5BNGQ3OTgzYTQtOTQzNS00Yjc4LTlhYjctYjQ3ZjhkNzMxOGFjXkEyXkFqcGdeQXVyNjMwMjk0MTQ@._V1_FMjpg_UX960_.jpg"}
  ]

  searchText = '';
  gener_list: any;
  selectedOption:any;

  constructor() { }
    
  ngOnInit() {
    var gens: Array<string> = [];
    this.movie_data.forEach(element => {
      element.geners.forEach(gen => {
        gens.push(gen)
      });
    });
    this.gener_list = [...new Set(gens)];
    this.movie_data.sort(function(a,b){return  b.showtime.getTime() - a.showtime.getTime()});
  }

  generFilterChange(value: any){
    console.log(value)
  }

}
