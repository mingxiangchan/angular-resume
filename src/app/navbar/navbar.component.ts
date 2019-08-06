import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  buttons = [
    "Hello",
    "Resume",
    "Portfolio",
    "Blog",
    "Contact Me"
  ]
  currentPage: string = "Hello";
  arr = [1,2,3,4,5,6]

  constructor() { }

  ngOnInit() {
  }

  onClick(btn) {
    this.currentPage = btn
  }
}
