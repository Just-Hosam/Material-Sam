import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonService } from './button.service';

@Component({
  selector: 'matsam-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  /** Text applied to button */
  @Input() text: string;

  /** The variant to use. */
  @Input() variant: 'text' | 'contained' | 'outlined' = 'contained';

  /** The size to use. */
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  /** If true, the button will take up the full width of its container. */
  @Input() fullWidth: boolean = false;

  /** If true, the component is disabled. */
  @Input() disabled: boolean = false;

  /** Override or extend the styles applied to the component. */
  @Input() classes: string[];

  /** Emits on click */
  @Output() onClick = new EventEmitter();

  constructor(public buttonService: ButtonService) {}
}
