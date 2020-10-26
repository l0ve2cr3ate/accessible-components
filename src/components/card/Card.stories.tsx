import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Card from './Card';

export default {
  title: 'Card',
  component: Card,
} as Meta;

const Template: Story<{}> = (args) => <Card {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: 'example',
};
