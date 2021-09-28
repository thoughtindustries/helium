import React from 'react';
import { Hero } from '../src/hero';

export default {
  title: 'Example/Hero',
  component: Hero,
  argTypes: {
    className: {
      name: 'className',
      type: { name: 'string', required: false },
      defaultValue: 'overflow-hidden relative',
      description: 'CSS class selector for Hero Image wrapper.',
      control: { type: 'text' }
    },
    title: {
      name: 'title',
      type: { name: 'string', required: false },
      description: 'Title that appears on the Hero Image.',
      control: { type: 'text' }
    },
    subtitle: {
      name: 'subtitle',
      type: { name: 'string', required: false },
      description: 'Subtitle that appears on the Hero Image.',
      control: { type: 'text' }
    },
    linkText: {
      name: 'linkText',
      type: { name: 'string', required: false },
      description: 'Link text that appears on the Hero Image.',
      control: { type: 'text' }
    },
    linkOpenInNewTab: {
      name: 'linkOpenInNewTab',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: 'Open link in new tab for link text.',
      control: { type: 'boolean' }
    },
    linkUrl: {
      name: 'linkUrl',
      type: { name: 'string', required: false },
      description: 'Link url for link text.',
      control: { type: 'text' }
    },
    asset: {
      name: 'asset',
      type: { name: 'string', required: false },
      description: 'Default asset for Hero Image.',
      control: { type: 'text' }
    },
    largeAsset: {
      name: 'largeAsset',
      type: { name: 'string', required: false },
      description: 'Opotional asset for Hero Image in large screen.',
      control: { type: 'text' }
    },
    smallAsset: {
      name: 'smallAsset',
      type: { name: 'string', required: false },
      description: 'Opotional asset for Hero Image in small screen.',
      control: { type: 'text' }
    }
  }
}

const Template = (args) => (
  <Hero {...args}>
    <Hero.Asset />
    <Hero.Caption />
  </Hero>
);

export const Base = Template.bind({});
Base.args = {
  title: 'Dolor Nullam Mattis Sem',
  subtitle: 'Maecenas sed diam eget risus varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
  asset: 'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/a_exif,c_fill,w_800/v1416438573/placeholder_kcjvxm.jpg',
  linkText: 'hello'
}