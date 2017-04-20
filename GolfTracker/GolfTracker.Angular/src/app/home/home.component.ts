import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'gt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pageTitle: string = 'Home';

  constructor(private _title: Title) {
    this._title.setTitle(this.pageTitle + ' - GolfTracker');
  }

  ngOnInit() {
  }

}
