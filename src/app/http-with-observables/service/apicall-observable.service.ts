import { Injectable } from '@angular/core';

import { map } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

class SearchItem {
  constructor(
    public track: string,
    public artist: string,
    public link: string,
    public thumbnail: string,
    public artistId: string
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class ApicallObservableService {

  results: any;
  apiRoot: string = "https://itunes.apple.com/search";
  constructor(private http: HttpClient) {}

  search(term: string): Observable<SearchItem[]> {
    let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    return this.http.get(apiURL).pipe(
      map(res => {
        this.results = res
        console.log(this.results)
        return this.results.results.map(item => {
          return new SearchItem(
            item.trackName,
            item.artistName,
            item.trackViewUrl,
            item.artworkUrl30,
            item.artistId
          );
        });
      })
    );
  }
}
