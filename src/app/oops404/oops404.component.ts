import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-oops404',
  templateUrl: './oops404.component.html',
  styleUrls: ['./oops404.component.scss']
})
export class Oops404Component {
  public error_text1 = 'YOU!'
  public error_text2 = 'SHALL NOT!'
  public error_text3 = 'PAAAAASSS!'

  constructor(
    private location : Location
  ) {}

  goBack(): void {
    this.location.back()
  }
}
