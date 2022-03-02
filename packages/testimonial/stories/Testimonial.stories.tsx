import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Testimonial, TestimonialProps } from '../src';

export default {
  title: 'Example/Testimonial',
  component: Testimonial,
  argTypes: {
    quote: {
      name: 'quote',
      type: { name: 'string', required: false },
      description: 'Quote',
      control: { type: 'text' }
    },
    username: {
      name: 'username',
      type: { name: 'string', required: false },
      description: 'User Name',
      control: { type: 'text' }
    },
    description: {
      name: 'description',
      type: { name: 'string', required: false },
      description: 'User Description',
      control: { type: 'text' }
    },
    backgroundColor: {
      controls: {
        matchers: {
          color: /(background|color)$/i
        }
      }
    },
    textColor: {
      controls: {
        matchers: {
          color: /(text|color)$/i
        }
      }
    },
    alignment: {
      name: 'alignment',
      options: ['Left', 'Center', 'Right'],
      control: { type: 'select' },
      defaultValue: 'Center'
    }
  }
} as Meta;

const Template: Story<TestimonialProps> = args => <Testimonial {...args} />;

export const SingleItem = Template.bind({});
SingleItem.args = {
  quote: 'Si hortum in bibliotheca habes, nihil deerit.',
  username: 'Marcus Tullius Cicero',
  description: 'Statesman',
  backgroundColor: '#FFFFFF',
  textColor: '#000000'
};
