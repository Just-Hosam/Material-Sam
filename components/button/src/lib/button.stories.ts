import { Meta, Story } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'Buttons/Button',
  component: ButtonComponent,
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const Text = Template.bind({});
Text.args = {
  text: 'Text',
  variant: 'text',
};

export const Contained = Template.bind({});
Contained.args = {
  text: 'Contained',
  variant: 'contained',
};

export const Outlined = Template.bind({});
Outlined.args = {
  text: 'Outlined',
  variant: 'outlined',
};
