import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  toggled = false
  isRed = false

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.toggled = !this.toggled
    this.isRed = true
  }

}
