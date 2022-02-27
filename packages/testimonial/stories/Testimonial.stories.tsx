import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Testimonial, TestimonialProps } from '../src';

export default {
  title: 'Example/Testimonial',
  component: Testimonial,
  argTypes: {}
} as Meta;

const Template: Story<TestimonialProps> = args => <Testimonial {...args} />;

export const Base = Template.bind({});
Base.args = {};

export const Alternate = Template.bind({});
Alternate.args = {};

export const AlternateWithLink = Template.bind({});
AlternateWithLink.args = {};
