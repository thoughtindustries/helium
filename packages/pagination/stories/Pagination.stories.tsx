import { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { Pagination, PaginationProps } from '../src';

const meta: Meta<PaginationProps> = {
  component: Pagination,
  title: 'Packages/Pagination'
};

export default meta;
type Pagination = StoryObj<PaginationProps>;

export const Base: Pagination = {
  render: args => <Pagination {...args} />
};
