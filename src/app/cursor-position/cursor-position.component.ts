import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cursor-position',
  templateUrl: './cursor-position.component.html',
  styleUrls: ['./cursor-position.component.css']
})
export class CursorPositionComponent implements OnInit {
  title : string = "Cursor Position Component";
  x = null;
  y = null;

  constructor() { }

  ngOnInit() {
  }

  onMouseMove($event: MouseEvent) {
    this.x = $event.clientX;
    this.y = $event.clientY;
  }

}
