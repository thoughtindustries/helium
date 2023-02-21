import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ContactBlockProps, ContactBlock } from '../src';

const meta: Meta<ContactBlockProps> = {
  component: ContactBlock
};

export default meta;
type ContactBlock = StoryObj<ContactBlockProps>;
//   title: 'Example/ContactBlock',
//   component: ContactBlock,
//   argTypes: {
//     contactSubtitle: {
//       name: 'contactSubtitle',
//       type: { name: 'string', required: false },
//       description: 'Contact subtitle displayed in contact block',
//       control: { type: 'text' }
//     },
//     contactDescription: {
//       name: 'contactDescription',
//       type: { name: 'string', required: false },
//       description: 'Contact discription displayed contact block',
//       control: { type: 'text' }
//     },
//     contactEmail: {
//       name: 'contactEmail',
//       type: { name: 'string', required: false },
//       description: 'Contact email selection in CTA dropdonw',
//       control: { type: 'text' }
//     },
//     actionType: {
//       name: 'actionType',
//       type: { name: 'string', required: false },
//       description: 'CTA action dropdown for contact block',
//       control: { type: 'text' }
//     },
//     actionText: {
//       name: 'actionText',
//       type: { name: 'string', required: false },
//       description: 'CTA button text for contact block',
//       control: { type: 'text' }
//     },
//     linkOpenInNewTab: {
//       name: 'linkOpenInNewTab',
//       type: { name: 'boolean', required: false },
//       defaultValue: false,
//       description: 'Open link in new tab for link text.',
//       control: { type: 'boolean' }
//     },
//     url: {
//       name: 'url',
//       type: { name: 'string', required: false },
//       description: 'Url selection string in the CTA dropdown',
//       control: { type: 'text' }
//     },
//     asset: {
//       name: 'asset',
//       type: { name: 'string', required: false },
//       description: 'Default asset for Hero Image.',
//       control: { type: 'text' }
//     },
//     textColor: {
//       name: 'textColor',
//       type: { name: 'string', required: false },
//       description: 'CTA button text for contact block',
//       control: { type: 'text' }
//     },
//     backgroundColor: {
//       name: 'backgroundColor',
//       type: { name: 'string', required: false },
//       description: 'Background color displayed in Contact block',
//       control: { type: 'text' }
//     }
//   }
// } as Meta;

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
