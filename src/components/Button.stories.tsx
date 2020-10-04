import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import  Button  from './Button';

export default {
  title: 'Button with Stitches',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<{}> = (args) => <Button {...args}>Hello</Button>;

export const Violet = Template.bind({});
Violet.args = {
  color: 'violet'
};

export const Gray = Template.bind({});
Gray.args = {
  color: 'gray',
};

