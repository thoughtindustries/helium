import React from 'react';
import { render } from '@testing-library/react';
import { LoadingDots } from '../../../src/components/loading-dots';

describe('@thoughtindustries/content/LoadingDots', () => {
  it('should render', () => {
    const { container } = render(<LoadingDots />);
    expect(container).toMatchInlineSnapshot(`
      <div>
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
      </div>
    `);
  });
});
