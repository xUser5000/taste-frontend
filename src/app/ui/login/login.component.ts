import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  hide: boolean = true;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  navigateToLanding (): void {
    this.router.navigateByUrl("/landing");
  }
}
