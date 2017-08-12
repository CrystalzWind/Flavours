import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'featured',
  templateUrl: './featured.component.jade',
  styleUrls: ['./featured.component.sass'],
})
export class FeaturedComponent implements OnInit {

  mouseInfo = 'default';

  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor() { }

  ngOnInit() {
  }

}
