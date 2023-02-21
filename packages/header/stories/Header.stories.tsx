import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { HeaderProps, Header } from '../src';

const meta: Meta<HeaderProps> = {
  component: Header,
  title: 'Packages/Header'
};

export default meta;
type Header = StoryObj<HeaderProps>;

export const Base: Header = {
  render: args => <Header {...args} />,
  args: {
    title: 'Dolor Nullam Mattis Sem'
  }
};
