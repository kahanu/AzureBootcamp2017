import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'gt-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {
  pageTitle: string = 'Portal';

  constructor(private _title: Title) {
    this._title.setTitle(this.pageTitle + ' - GolfTracker');
  }

  ngOnInit() {
  }

}
