import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ContentTabProps, ContentTab } from '../src';

const meta: Meta<ContentTabProps> = {
  component: ContentTab,
  title: 'Packages/Content Tab'
};

export default meta;
type ContentTab = StoryObj<ContentTabProps>;

export const Base: ContentTab = {
  render: args => <ContentTab {...args} />,
  args: {
    tabsView: true
  }
};
