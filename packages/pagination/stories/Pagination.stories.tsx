import { Story } from '@storybook/react';
import React from 'react';
import { Pagination, PaginationProps } from '../src';

export default {
  title: 'Example/Pagination',
  component: Pagination,
  argTypes: {
    page: {
      name: 'page',
      type: { name: 'number', required: false },
      description: 'Current page number.',
      control: { type: 'number' }
    },
    pageSize: {
      name: 'pageSize',
      type: { name: 'number', required: false },
      description: 'Page size.',
      control: { type: 'number' }
    },
    total: {
      name: 'total',
      type: { name: 'number', required: true },
      description: 'Total items count.',
      control: { type: 'number' },
      defaultValue: 100
    },
    hidePageList: {
      name: 'hidePageList',
      type: { name: 'boolean', required: false },
      description: 'Hide page list.',
      control: { type: 'boolean' }
    }
  }
};

type PaginationStoryArgs = Omit<PaginationProps, 'getPageLink'>;
const getPageLink: PaginationProps['getPageLink'] = page => `/sample?page=${page}`;

const Template: Story<PaginationStoryArgs> = ({ ...args }) => (
  <Pagination getPageLink={getPageLink} {...args} />
);

export const Base = Template.bind({});
