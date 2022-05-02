import { Story } from '@storybook/react';
import React from 'react';
import { Redemption } from '../src';

export default {
  title: 'Example/Redemption',
  component: Redemption
};

const Item = () => <Redemption />;

export const Base: Story<null> = Item.bind({});
