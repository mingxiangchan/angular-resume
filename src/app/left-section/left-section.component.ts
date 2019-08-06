import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-section',
  templateUrl: './left-section.component.html',
  styleUrls: ['./left-section.component.css']
})
export class LeftSectionComponent implements OnInit {
  imageUrl = "https://via.placeholder.com/250x100.png"
  details = [
    "Age: 38 years",
    "Name: John Doe",
    "Degree: MBA",
    "Experience: 15 years",
    "Location: Rome, Italy"
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
