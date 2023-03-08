import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ContactBlockProps, ContactBlock } from '../src';

const meta: Meta<ContactBlockProps> = {
  component: ContactBlock,
  title: 'Packages/Contact Block'
};

export default meta;
type ContactBlock = StoryObj<ContactBlockProps>;

export const Base: ContactBlock = {
  render: args => <ContactBlock {...args} />,
  args: {
    contactSubtitle: 'Subtitle',
    contactName: 'Jane Jacobs',
    actionText: 'Contact',
    contactDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique metus nec sagittis euismod lorem ipsum forte contiuum.'
  }
};
