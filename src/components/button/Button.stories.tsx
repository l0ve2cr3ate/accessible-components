import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Button from './Button';

export default {
  title: 'Button with Stitches',
  component: Button,
  argTypes: {
    color: {
      control: {
        type: 'inline-radio',
        options: ['violet', 'gray'],
      },
    },
  },
} as Meta;

const Template: Story<{}> = (args) => <Button {...args} />;

export const Violet = Template.bind({});
Violet.args = {
  color: 'violet',
  children: 'example',
};

export const Gray = Template.bind({});
Gray.args = {
  color: 'gray',
  children: 'example',
};
