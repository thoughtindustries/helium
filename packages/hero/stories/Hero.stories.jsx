import React from 'react';
import { Hero } from './../src/Hero';

export default {
  title: 'Example/Hero',
  component: Hero,
  argTypes: {
    title: {
      name: 'title',
      type: { name: 'string', required: false },
      description: 'Title that appears on the Hero Image.',
      control: { type: 'text' }
    }
  }
}

const Template = (args) => <Hero {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  title: 'Welcome!'
}