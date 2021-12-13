import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'matsam-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() disabled: boolean;

  constructor() {}

  ngOnInit(): void {}
}
