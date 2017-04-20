import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'gt-golfer',
  templateUrl: './golfer.component.html',
  styleUrls: ['./golfer.component.css']
})
export class GolferComponent implements OnInit {
  pageTitle: string = 'Golfers';

  constructor(private _title: Title) {
    this._title.setTitle(this.pageTitle + ' - GolfTracker');
  }

  ngOnInit() {
  }

}
