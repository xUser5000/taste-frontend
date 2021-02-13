import { Component, Input, OnInit } from '@angular/core';
import { SideNavService } from 'src/app/service/side-nav.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  public open: boolean;

  constructor (private sideNavService: SideNavService) {
    this.open = this.sideNavService.getValue();
  }

  ngOnInit(): void {
    this.sideNavService.getObservable().subscribe(res => this.open = res);
  }

  onStateChanged (event: boolean): void {
    this.sideNavService.setValue(event);
  }

  closeNav (): void {
    this.sideNavService.setValue(false);
  }
}
