import { storiesOf } from '@storybook/angular';
import { InputComponent } from './input.component';

storiesOf('input', module)
  .add('basic', () => ({
    component: InputComponent,
  }))
  .add('disabled', () => ({
    component: InputComponent,
  }));
