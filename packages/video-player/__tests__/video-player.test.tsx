import React from 'react';
import { render } from '@testing-library/react';
import { VideoPlayer } from '../src';

describe('@thoughtindustries/video-player', () => {
  describe('Video Player', () => {
    it('should render', () => {
      const { container } = render(<VideoPlayer asset="o8p3hzwdmj" playerColor="#2498d2" />);
      expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="flex flex-col items-center w-full"
        >
          <div
            class="w-4/5 md:w-[850px] px-4"
          >
            <div
              class="flex items-center justify-center space-x-10"
            >
              <div
                class="animate-ping w-5 h-5 bg-gray-700 rounded-full"
                style="animation-delay: -0.32s;"
              />
              <div
                class="animate-ping w-5 h-5 bg-gray-700 rounded-full"
                style="animation-delay: -0.16s;"
              />
              <div
                class="animate-ping w-5 h-5 bg-gray-700 rounded-full"
              />
            </div>
            <div
              class="wistia_embed wistia_async_o8p3hzwdmj"
              id="wistia-player-o8p3hzwdmj"
            />
          </div>
        </div>
      </div>
      `);
    });
  });
});
