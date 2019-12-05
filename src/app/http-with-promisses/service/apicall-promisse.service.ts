import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
export class ApicallPromisseService {

  
  apiRoot: string = "https://itunes.apple.com/search";
  results: any;
  loading: boolean;

  constructor(private http: HttpClient) {
    this.results = [];
    this.loading = false;
  }

  search(term: string) {
    let promise = new Promise((resolve, reject) => {
      let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
      this.http
        .get(apiURL)
        .toPromise()
        .then(
          res => {
            this.results = res
            this.results = this.results.results.map(item => {
              return new SearchItem(
                item.trackName,
                item.artistName,
                item.trackViewUrl,
                item.artworkUrl30,
                item.artistId
              );
            });
            console.log(this.results)
            resolve();
          },
          msg => {
            reject(msg);
          }
        );
    });
    return promise;
  }
}
