import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  private navOpen: boolean = true;
  @Output() onNavToggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  public toggleNav (): void {
    this.navOpen = !this.navOpen;
    this.onNavToggle.emit(this.navOpen);
  } 

}
