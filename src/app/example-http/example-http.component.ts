import { Component, OnInit } from '@angular/core';
import { ApicallsService } from './service/apicalls.service';

@Component({
  selector: 'app-example-http',
  templateUrl: './example-http.component.html',
  styleUrls: ['./example-http.component.css']
})
export class ExampleHttpComponent implements OnInit {

  constructor(private apiCalls: ApicallsService) { }

  ngOnInit() {
  }

}
