import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ContentTabsProps, ContentTabs } from '../src';

const meta: Meta<ContentTabsProps> = {
  component: ContentTabs,
  title: 'Packages/Content Tabs'
};

export default meta;
type ContentTabs = StoryObj<ContentTabsProps>;

export const Base: ContentTabs = {
  render: args => <ContentTabs {...args} />,
  args: {
    tabsView: true
  }
};
