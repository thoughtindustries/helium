import { Story } from '@storybook/react';
import React from 'react';
import { Redemption, RedemptionProps } from '../src';

export default {
  title: 'Example/Redemption',
  component: Redemption,
  argTypes: {
    currentUser: {
      name: 'loggedIn?',
      type: { name: 'boolean', required: false },
      description: 'Check for logged in user.',
      control: { type: 'boolean' }
    }
  }
};

const Item = ({ ...args }: RedemptionProps) => <Redemption {...args} />;

export const Base: Story<RedemptionProps> = Item.bind({});
Base.args = {
  currentUser: true
};
