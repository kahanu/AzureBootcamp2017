import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'gt-golfclub',
  templateUrl: './golfclub.component.html',
  styleUrls: ['./golfclub.component.css']
})
export class GolfclubComponent implements OnInit {
  pageTitle = 'Golf Clubs';

  constructor(private _title: Title) {
    this._title.setTitle(this.pageTitle + ' - GolfTracker');
  }

  ngOnInit() {
  }

}
