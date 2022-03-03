import React from 'react';
import { render } from '@testing-library/react';
import { ContactBlock, ContactBlockProps } from '../src';

describe('@thoughtindustries/contact-block', () => {
  it('should render with button', () => {
    const props: ContactBlockProps = {
      linkOpenInNewTab: true,
      contactDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique metus nec sagittis euismod lorem ipsum forte contiuum.',
      url: 'https://www.google.com',
      contactName: 'Jane Jacobs',
      contactSubtitle: 'Subtitle',
      actionText: 'Contact',
      contactEmail: 'fakeemail@gmail.com'
    };
    const { container } = render(<ContactBlock {...props} />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="px-4 py-12 text-center"
        >
          <div
            class="row"
          >
            <div
              class="w-8/12 md:w-6/12 float-none mx-auto px-4 relative"
            >
              <p
                class="font-medium text-sm leading-7 mb-4"
              >
                 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique metus nec sagittis euismod lorem ipsum forte contiuum.
              </p>
              <div
                class="text-xs mb-4"
              >
                <p
                  class="font-extrabold my-0 mr-0 ml-1 uppercase tracking-widest"
                >
                   
                  Jane Jacobs
                </p>
                <p
                  class="mx-0 mb-0 mt-px"
                >
                   
                  Subtitle
                   
                </p>
              </div>
              <a
                class="text-white bg-indigo-700 hover:bg-indigo-600 rounded-sm border-solid border cursor-pointer inline-block font-normal text-sm leading-tight py-2 px-5 relative text-center no-underline ease-in-out duration-200 transition font-sans mx-auto mb-0"
                href="mailto:fakeemail@gmail.com"
                target="_blank"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    `);
  });

  it('should render without button', () => {
    const props: ContactBlockProps = {
      contactDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique metus nec sagittis euismod lorem ipsum forte contiuum.',
      contactName: 'Jane Jacobs',
      contactSubtitle: 'Subtitle'
    };

    const { container } = render(<ContactBlock {...props} />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="px-4 py-12 text-center"
        >
          <div
            class="row"
          >
            <div
              class="w-8/12 md:w-6/12 float-none mx-auto px-4 relative"
            >
              <p
                class="font-medium text-sm leading-7 mb-4"
              >
                 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique metus nec sagittis euismod lorem ipsum forte contiuum.
              </p>
              <div
                class="text-xs mb-4"
              >
                <p
                  class="font-extrabold my-0 mr-0 ml-1 uppercase tracking-widest"
                >
                   
                  Jane Jacobs
                </p>
                <p
                  class="mx-0 mb-0 mt-px"
                >
                   
                  Subtitle
                   
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    `);
  });
});
