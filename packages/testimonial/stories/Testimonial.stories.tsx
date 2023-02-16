import React from 'react';
import { TestimonialMultiCarousel, TestimonialItemProps } from '../src';
import { StoryObj } from '@storybook/react';

export default { component: TestimonialMultiCarousel };

type Testimonial = StoryObj<TestimonialItemProps>;

const Item = ({ ...args }: TestimonialItemProps) => (
  <TestimonialMultiCarousel {...args} desktopColumnCount={1}>
    <TestimonialMultiCarousel.Item {...args} />
  </TestimonialMultiCarousel>
);

export const Single: Testimonial = {
  render: args => <Item {...args} />,
  args: {
    quote: 'Si hortum in bibliotheca habes, nihil deerit.',
    username: 'Marcus Tullius Cicero',
    description: 'Statesman',
    backgroundColor: '#FFFFFF',
    textColor: '#000000',
    alignment: 'Center'
  }
};

const Multi = ({ ...args }: TestimonialItemProps) => (
  <TestimonialMultiCarousel {...args} desktopColumnCount={1}>
    <TestimonialMultiCarousel.Item {...args} />
    <TestimonialMultiCarousel.Item {...args} />
    <TestimonialMultiCarousel.Item {...args} />
  </TestimonialMultiCarousel>
);

export const List: Testimonial = {
  render: args => <Multi {...args} />,
  args: {
    quote: 'Si hortum in bibliotheca habes, nihil deerit.',
    username: 'Marcus Tullius Cicero',
    description: 'Statesman',
    backgroundColor: '#FFFFFF',
    textColor: '#000000',
    alignment: 'Left'
  }
};
