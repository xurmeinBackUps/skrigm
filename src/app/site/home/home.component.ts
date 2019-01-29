import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'SKRIGM Web-App';
  subtitle = 'customizable gm screen'

  constructor() { }

  ngOnInit() {
  }

}
