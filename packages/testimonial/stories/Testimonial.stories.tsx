import { Story } from '@storybook/react';
import React from 'react';
import { Testimonial, TestimonialMultiCarousel, TestimonialItemProps } from '../src';

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
    },
    asset: {
      name: 'asset',
      type: { name: 'string', required: false },
      description: 'Add asset to background of testimonial.',
      control: { type: 'text' }
    }
  }
};

const Item = ({ ...args }: TestimonialItemProps) => (
  <Testimonial>
    <TestimonialMultiCarousel {...args} desktopColumnCount={1}>
      <TestimonialMultiCarousel.Item {...args} />
    </TestimonialMultiCarousel>
  </Testimonial>
);

export const Single: Story<TestimonialItemProps> = Item.bind({});
Single.args = {
  quote: 'Si hortum in bibliotheca habes, nihil deerit.',
  username: 'Marcus Tullius Cicero',
  description: 'Statesman',
  backgroundColor: '#FFFFFF',
  textColor: '#000000',
  alignment: 'Center'
};

const Multi = ({ ...args }: TestimonialItemProps) => (
  <Testimonial>
    <TestimonialMultiCarousel {...args} desktopColumnCount={1}>
      <TestimonialMultiCarousel.Item {...args} />
      <TestimonialMultiCarousel.Item {...args} />
      <TestimonialMultiCarousel.Item {...args} />
    </TestimonialMultiCarousel>
  </Testimonial>
);

export const List: Story<TestimonialItemProps> = Multi.bind({});
List.args = {
  quote: 'Si hortum in bibliotheca habes, nihil deerit.',
  username: 'Marcus Tullius Cicero',
  description: 'Statesman',
  backgroundColor: '#FFFFFF',
  textColor: '#000000',
  alignment: 'Left'
};
