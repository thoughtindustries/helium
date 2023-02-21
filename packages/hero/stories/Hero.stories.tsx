import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { HeroProps, Hero } from '../src';

const meta: Meta<HeroProps> = {
  component: Hero,
  title: 'Packages/Hero'
};

export default meta;
type Hero = StoryObj<HeroProps>;

export const Base: Hero = {
  render: args => <Hero {...args} />,
  args: {
    title: 'Dolor Nullam Mattis Sem',
    subtitle:
      'Maecenas sed diam eget risus varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
    asset:
      'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fill,w_800/v1416438573/placeholder_kcjvxm.jpg'
  }
};
