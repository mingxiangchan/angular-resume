import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  isBlue = false
  details = [
    "Age: 38 years",
    "Degree: MBA",
    "Experience: 15 years",
    "Location: Rome, Italy",
    "Phone: (800) 123-4567",
    "Career Level: Mid",
    "Email: example@example.com",
    "Fax: (800) 123-4567",
    "Name: John Doe",
    "",
  ]

  constructor() { }

  ngOnInit() {
  }

  onMouseEnter() {
    this.isBlue = true
  }

  onMouseLeave() {
    this.isBlue = false
  }

}
