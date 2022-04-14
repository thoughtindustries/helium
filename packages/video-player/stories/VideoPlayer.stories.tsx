import { Meta, Story } from '@storybook/react';
import React from 'react';
import { VideoPlayer, VideoPlayerProps } from '../src';

export default {
  title: 'Example/Video-Player',
  component: VideoPlayer,
  argTypes: {
    asset: {
      name: 'asset',
      type: { name: 'string', required: true },
      description: 'Wistia ID of the asset to be embedded.',
      control: { type: 'text' }
    },
    playerColor: {
      name: 'playerColor',
      type: { name: 'string', required: true },
      description: 'Hex code of color to use for Wistia Player.',
      control: { type: 'text' }
    },
    userId: {
      name: 'userId',
      type: { name: 'string', required: false },
      description: 'ID of the user for tracking purposes (when tracking is enabled).',
      control: { type: 'text' }
    },
    doNotTrack: {
      name: 'doNotTrack',
      type: { name: 'boolean', required: false },
      defaultValue: 'false',
      description: 'Controls whether the view is tracked (defaults to false).',
      control: { type: 'boolean' }
    }
  }
} as Meta;

const Template: Story<VideoPlayerProps> = args => <VideoPlayer {...args} />;

export const Base = Template.bind({});
Base.args = {
  asset: 'o8p3hzwdmj',
  playerColor: '#C1E1C1'
};

export const Alternate = Template.bind({});
Alternate.args = {
  asset: '3ezt7m1tx1',
  playerColor: '#A7C7E7'
};
