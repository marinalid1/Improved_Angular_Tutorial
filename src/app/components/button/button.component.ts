// 25:30 import {Input}
// 28:30 import { Output, EventEmitter}
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  // 25:30 add @ Input text and color, allows us to accept as input
  @Input() text: string;
  @Input() color: string;
  // 28:30 add EventEmitter
  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  // 27:45 add onClick, console.log('Add')
  onClick() {
    this.btnClick.emit();
  }
}
