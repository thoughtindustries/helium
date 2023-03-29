import { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { Pagination, PaginationProps } from '../src';

const meta: Meta<PaginationProps> = {
  component: Pagination,
  title: 'Packages/Pagination'
};

export default meta;
type Pagination = StoryObj<PaginationProps>;

const getPageLink: PaginationProps['getPageLink'] = page => `/sample?page=${page}`;

export const Base: Pagination = {
  render: args => <Pagination {...args} />,
  args: {
    total: 100,
    getPageLink
  }
};
