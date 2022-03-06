import React from 'react';
import { render } from '@testing-library/react';
import { Testimonial, TestimonialMultiCarousel } from '../src';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (key: string) => key
    };
  }
}));

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});

const mockTestimonial = {
  quote: 'Si hortum in bibliotheca habes, nihil deerit.',
  username: 'Marcus Tullius Cicero',
  description: 'Statesman',
  backgroundColor: '#FFFFFF',
  textColor: '#000000',
  alignment: 'Left',
  asset: ''
};

describe('@thoughtindustries/testimonial', () => {
  describe('Single Testimonial', () => {
    it('should render', () => {
      const { container } = render(
        <Testimonial>
          <TestimonialMultiCarousel desktopColumnCount={1}>
            <TestimonialMultiCarousel.Item {...mockTestimonial} />
          </TestimonialMultiCarousel>
        </Testimonial>
      );
      expect(container).toMatchInlineSnapshot(`
    <div>
      <div>
        <div
          class="overflow-hidden relative"
        >
          <ul
            class="transition-all duration-500 flex"
            style="transform: translateX(-0%);"
          >
            <li
              class="flex-none w-full p-8"
              style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); background-image: url();"
            >
              <div
                class="text-center py-36 px-1 block"
              >
                <div
                  class="relative before:block before:w-full flex items-center py-0 px-12 justify-start"
                >
                  <div
                    class="text-left absolute"
                  >
                    <h1
                      class="text-xl mb-6"
                    >
                      Si hortum in bibliotheca habes, nihil deerit.
                    </h1>
                    <p
                      class="text-md relative pt-2 m-0 italic before:w-full before:border-solid before:border-t before:border-t-current before:block before:absolute before:top-0 before:h-0"
                    >
                      Marcus Tullius Cicero
                    </p>
                    <p
                      class="text-sm italic"
                    >
                      Statesman
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
      `);
    });
  });
  describe('Testimonial List', () => {
    it('should render', () => {
      const { container } = render(
        <Testimonial>
          <TestimonialMultiCarousel desktopColumnCount={1}>
            <TestimonialMultiCarousel.Item {...mockTestimonial} />
            <TestimonialMultiCarousel.Item {...mockTestimonial} />
            <TestimonialMultiCarousel.Item {...mockTestimonial} />
          </TestimonialMultiCarousel>
        </Testimonial>
      );
      expect(container).toMatchInlineSnapshot(`
    <div>
      <div>
        <div
          class="overflow-hidden relative"
        >
          <ul
            class="transition-all duration-500 flex"
            style="transform: translateX(-0%);"
          >
            <li
              class="flex-none w-full p-8"
              style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); background-image: url();"
            >
              <div
                class="text-center py-36 px-1 block"
              >
                <div
                  class="relative before:block before:w-full flex items-center py-0 px-12 justify-start"
                >
                  <div
                    class="text-left absolute"
                  >
                    <h1
                      class="text-xl mb-6"
                    >
                      Si hortum in bibliotheca habes, nihil deerit.
                    </h1>
                    <p
                      class="text-md relative pt-2 m-0 italic before:w-full before:border-solid before:border-t before:border-t-current before:block before:absolute before:top-0 before:h-0"
                    >
                      Marcus Tullius Cicero
                    </p>
                    <p
                      class="text-sm italic"
                    >
                      Statesman
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="flex-none w-full p-8"
              style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); background-image: url();"
            >
              <div
                class="text-center py-36 px-1 block"
              >
                <div
                  class="relative before:block before:w-full flex items-center py-0 px-12 justify-start"
                >
                  <div
                    class="text-left absolute"
                  >
                    <h1
                      class="text-xl mb-6"
                    >
                      Si hortum in bibliotheca habes, nihil deerit.
                    </h1>
                    <p
                      class="text-md relative pt-2 m-0 italic before:w-full before:border-solid before:border-t before:border-t-current before:block before:absolute before:top-0 before:h-0"
                    >
                      Marcus Tullius Cicero
                    </p>
                    <p
                      class="text-sm italic"
                    >
                      Statesman
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="flex-none w-full p-8"
              style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); background-image: url();"
            >
              <div
                class="text-center py-36 px-1 block"
              >
                <div
                  class="relative before:block before:w-full flex items-center py-0 px-12 justify-start"
                >
                  <div
                    class="text-left absolute"
                  >
                    <h1
                      class="text-xl mb-6"
                    >
                      Si hortum in bibliotheca habes, nihil deerit.
                    </h1>
                    <p
                      class="text-md relative pt-2 m-0 italic before:w-full before:border-solid before:border-t before:border-t-current before:block before:absolute before:top-0 before:h-0"
                    >
                      Marcus Tullius Cicero
                    </p>
                    <p
                      class="text-sm italic"
                    >
                      Statesman
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <button
            aria-label="right"
            class="no-underline font-normal cursor-pointer p-0 text-center text-gray-600 top-36 absolute right-0"
          >
            <svg
              class="h-14 w-14"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
      `);
    });
  });
});
