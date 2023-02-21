import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { VideoPlayer, VideoPlayerProps } from '../src';

const meta: Meta<VideoPlayerProps> = {
  component: VideoPlayer,
  title: 'Packages/Video Player'
};

export default meta;
type VideoPlayer = StoryObj<VideoPlayerProps>;

export const Base: VideoPlayer = {
  render: args => <VideoPlayer {...args} />,
  args: {
    asset: 'o8p3hzwdmj',
    playerColor: '#C1E1C1'
  }
};

export const Alternate: VideoPlayer = {
  render: args => <VideoPlayer {...args} />,
  args: {
    asset: '3ezt7m1tx1',
    playerColor: '#A7C7E7'
  }
};
