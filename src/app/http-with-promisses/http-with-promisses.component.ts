import { Component, OnInit } from '@angular/core';
import { ApicallPromisseService } from './service/apicall-promisse.service';

@Component({
  selector: 'app-http-with-promisses',
  templateUrl: './http-with-promisses.component.html',
  styleUrls: ['./http-with-promisses.component.css']
})
export class HttpWithPromissesComponent {
  loading: boolean = false;

  constructor(private apiCallsPromisse: ApicallPromisseService) { }

  doSearch(term: string) {
    this.loading = true;
    this.apiCallsPromisse.search(term).then(_ => (this.loading = false));
  }
}
