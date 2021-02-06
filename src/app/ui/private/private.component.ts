import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {

  public navOpen: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleNav(event: boolean): void {
    this.navOpen = event;
  }

}
