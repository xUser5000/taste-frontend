import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SideNavService } from 'src/app/service/side-nav.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor (private sideNavService: SideNavService) { }

  ngOnInit(): void {
  }

  public toggleNav (): void {
    this.sideNavService.toggle();
  }

}
