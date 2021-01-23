import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string = "";
  email: string = "";
  password: string = "";
  hide = true;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  navigateToLanding (): void {
    this.router.navigateByUrl("/landing");
  }
}
