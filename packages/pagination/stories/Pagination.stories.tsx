import { StoryObj } from '@storybook/react';
import React from 'react';
import { Pagination, PaginationProps } from '../src';

export default { component: Pagination, title: 'Packages/Pagination' };

type Pagination = StoryObj<PaginationProps>;

export const Base: Pagination = {
  render: args => <Pagination {...args} />
};
