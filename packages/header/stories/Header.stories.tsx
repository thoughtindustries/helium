import { Meta, Story } from '@storybook/react';
import React from 'react';
import { HeaderProps, Header } from '../src';

export default {
  title: 'Example/Header',
  component: Header,
  argTypes: {
    title: {
      name: 'title',
      type: { name: 'string', required: true },
      description: 'Title that appears on the Header.',
      control: { type: 'text' }
    },
    alternateTitleDisplay: {
      name: 'alternateTitleDisplay',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: 'Show alternate title display.',
      control: { type: 'boolean' }
    },
    linkOpenInNewTab: {
      name: 'linkOpenInNewTab',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: 'Open link in new tab.',
      control: { type: 'boolean' }
    },
    linkUrl: {
      name: 'linkUrl',
      type: { name: 'string', required: false },
      description: 'Url for link that appears next to the title.',
      control: { type: 'text' }
    },
    linkText: {
      name: 'linkOpenInNewTab',
      type: { name: 'string', required: false },
      description: 'Text for link that appears next to the title.',
      control: { type: 'text' }
    }
  }
} as Meta;

const Template: Story<HeaderProps> = args => <Header {...args} />;

export const Base = Template.bind({});
Base.args = {
  title: 'Dolor Nullam Mattis Sem'
};

export const Alternate = Template.bind({});
Alternate.args = {
  title: 'Dolor Nullam Mattis Sem',
  alternateTitleDisplay: true
};

export const AlternateWithLink = Template.bind({});
AlternateWithLink.args = {
  title: 'Dolor Nullam Mattis Sem',
  alternateTitleDisplay: true,
  linkText: 'Test',
  linkUrl: '/'
};
