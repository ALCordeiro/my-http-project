import { Component, OnInit } from '@angular/core';
import { ApicallObservableService } from './service/apicall-observable.service';
import { FormControl } from "@angular/forms";


@Component({
  selector: 'app-http-with-observables',
  templateUrl: './http-with-observables.component.html',
  styleUrls: ['./http-with-observables.component.css']
})
export class HttpWithObservablesComponent implements OnInit {

  private loading: boolean = false;
  private results: any;
  private searchField: FormControl;

  constructor(private apiCallsObservable: ApicallObservableService) {}

  ngOnInit() {
    this.searchField = new FormControl();
  }


  doSearch(term: string) {
    this.loading = true;
    this.apiCallsObservable.search(term).subscribe(res => {
      this.results = res 
      this.loading = false
    });
  }
}
