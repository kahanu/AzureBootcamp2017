import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gt-golf-club',
  templateUrl: './golf-club.component.html',
  styleUrls: ['./golf-club.component.css']
})
export class GolfClubComponent implements OnInit {

  code: string;

  constructor() { }

  ngOnInit() {
    this.loadCode();
  }

  loadCode() {
    this.code = `
    <pre><code>
{{ '{' }}
	"name":"PGA West","location":"La Quinta, CA","golfCourses":
		[
			{{ '{' }}
				"name":"Nicklaus Tournament",
				"tees":
				[
					{{ '{' }}"teeName":"Champ","gender":"Mens","length":7392,"slope":141,"rating":75.3,"par":72 {{ '}' }},
					{{ '{' }}"teeName":"Blue","gender":"Mens","length":6994,"slope":138,"rating":73.1,"par":72 {{ '}' }}
				]
			 {{ '}' }},
			{{ '{' }}
				"name":"Stadium",
				"tees":
				[
					{{ '{' }}"teeName":"Champ","gender":"Mens","length":7482,"slope":145,"rating":75.3,"par":72 {{ '}' }},
					{{ '{' }}"teeName":"Black","gender":"Mens","length":7092,"slope":139,"rating":73.5,"par":72 {{ '}' }}
				]
			 {{ '}' }}
		],
	"id":"6a723bdb-3e98-4ced-a72a-235a9218ca75",
	"docType":"golfclub"
{{ '}' }}

    </code></pre>
    `;
  }
}
