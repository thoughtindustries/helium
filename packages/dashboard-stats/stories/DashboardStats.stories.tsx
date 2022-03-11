import { Meta, Story } from '@storybook/react';
import React from 'react';
import { DashboardStatsProps, DashboardStats } from '../src';

export default {
  title: 'Example/DashboardStats',
  component: DashboardStats,
  argTypes: {
    availableCoursesCount: {
      name: 'availableCoursesCount',
      type: { name: 'number', required: true },
      defaultValue: false,
      description: `Displays number of available courses.`,
      control: { type: 'number' }
    },
    startedCoursesCount: {
      name: 'startedCoursesCount',
      type: { name: 'number', required: true },
      description: `Number of courses completed by user.`,
      control: { type: 'number' }
    },
    completedCoursesCount: {
      name: 'completedCoursesCount',
      type: { name: 'number', required: true },
      description: `Number of courses completed by user.`,
      control: { type: 'number' }
    },
    certificatesCount: {
      name: 'certificatesCount',
      type: { name: 'number', required: true },
      description: `User's certificate count.`,
      control: { type: 'number' }
    },
    collaborationsCount: {
      name: 'collaborationsCount',
      type: { name: 'number', required: true },
      defaultValue: false,
      description: `User's collaborations.`,
      control: { type: 'number' }
    },
    hideLabels: {
      name: 'hideLabels',
      type: { name: 'boolean', required: true },
      defaultValue: false,
      description: `Hide user dashboard.`,
      control: { type: 'boolean' }
    }
  }
} as Meta;

const Template: Story<DashboardStatsProps> = args => <DashboardStats {...args} />;

export const Base = Template.bind({});
Base.args = {
  availableCoursesCount: 1200,
  startedCoursesCount: 5,
  completedCoursesCount: 10,
  certificatesCount: 3,
  collaborationsCount: 1,
  hideLabels: false
};
