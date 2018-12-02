import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styles: [
    `
      img {
        height: 70px;
        width: 60px;
      }
    `
  ]
})
export class ImageComponent implements OnInit {
  @Input() imgName: string;
  constructor() {}

  ngOnInit() {}
}
