import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  paras = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id tellus nisl. Phasellus vulputate fringilla purus, quis sagittis purus rutrum fermentum. Etiam scelerisque arcu at convallis lacinia. Curabitur vestibulum enim leo, id luctus magna rutrum quis.",
    "Praesent finibus eleifend arcu, et auctor leo. Fusce gravida a mauris at rhoncus. Fusce sed nisl vel metus vulputate ullamcorper. Pellentesque finibus vestibulum est, nec placerat metus fermentum vitae. Mauris lorem sapien, porta sit amet urna eget, sagittis auctor elit."
  ]

  constructor() { }

  ngOnInit() {
  }

}
