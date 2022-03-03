import React from 'react';
import { render } from '@testing-library/react';
import { Testimonial } from '../src';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (key: string) => key
    };
  }
}));

const props = {
  quote: 'Test',
  username: 'Test',
  description: 'Test',
  backgroundColor: '#FFFFFF',
  textColor: '#000000',
  alignment: 'center',
  asset: ''
};

describe('@thoughtindustries/testimonial', () => {
  describe('Testimonial', () => {
    it('should render', () => {
      const { container } = render(
        <Testimonial {...props}>
          <div></div>
        </Testimonial>
      );
      expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="relative before:block before:w-full flex justify-center"
        >
          <div
            class="text-right px-4 py-0 absolute"
            style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); background-image: url();"
          >
            <h1
              class="text-4xl mb-6"
            >
              Test
            </h1>
            <p
              class="text-2xl relative pt-2 m-0 italic before:w-full before:border-solid before:border-t before:border-t-current before:block before:absolute before:top-0 before:h-0"
            >
              Test
            </p>
            <p
              class="text-base italic"
            >
              Test
            </p>
          </div>
        </div>
      </div>
      `);
    });
  });
});
