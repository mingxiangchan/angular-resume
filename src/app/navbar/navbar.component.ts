import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  btn1 = "Hello"
  btn2 = "Resume"
  btn3 = "Portfolio"
  btn4 = "Blog"
  btn5 = "Contact Me"
  currentPage: string = "Hello";

  constructor() { }

  ngOnInit() {
  }

  onClick(btn) {
    this.currentPage = btn
  }
}
