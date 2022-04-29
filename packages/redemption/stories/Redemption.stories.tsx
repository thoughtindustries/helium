import { Story } from '@storybook/react';
import React from 'react';
import { Redemption, RedemptionCodeBox } from '../src';

export default {
  title: 'Example/Redemption',
  component: Redemption
};

const Item = () => (
  <Redemption>
    <RedemptionCodeBox />
  </Redemption>
);

export const Single: Story<null> = Item.bind({});

const Multi = () => (
  <Redemption>
    <RedemptionCodeBox />
    <RedemptionCodeBox />
    <RedemptionCodeBox />
  </Redemption>
);

export const Group: Story<null> = Multi.bind({});
