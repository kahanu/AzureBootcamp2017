import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primary-nav',
  templateUrl: './primary-nav.component.html',
  styleUrls: ['./primary-nav.component.css']
})
export class PrimaryNavComponent implements OnInit {
  title: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Angular Starter Kit';
  }

}
