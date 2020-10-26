import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Meta, Story } from '@storybook/react/types-6-0';
import CardHeader from './CardHeader';
import { CardHeaderProps } from './CardHeader';

export default {
  title: 'Card-header',
  component: CardHeader,
  argTypes: {
    to: { control: null },
  },
} as Meta;

const Template: Story<CardHeaderProps> = (args) => (
  <MemoryRouter>
    <CardHeader {...args} />
  </MemoryRouter>
);

export const Title = Template.bind({});
Title.args = {
  title: 'Cardheader-title',
};
