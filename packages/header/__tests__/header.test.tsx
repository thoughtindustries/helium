import React from 'react';
import { render } from '@testing-library/react';
import { Header, HeaderProps } from '../src';

const setupProps = (alternateTitleDisplay: boolean = false): HeaderProps => ({
  title: 'Header title',
  alternateTitleDisplay
});

describe('@thoughtindustries/header', () => {
  it('should render', () => {
    const props: HeaderProps = setupProps();
    const { container } = render(<Header {...props} />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <h2
          class="text-2xl text-center text-gray-700 mb-4 font-header"
        >
          Header title
        </h2>
      </div>
    `);
  });

  it('should render alternate header', () => {
    const props: HeaderProps = setupProps(true);
    const { container } = render(<Header {...props} />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div>
          <h3>
            Header title
          </h3>
        </div>
        <hr
          class="relative"
        />
      </div>
    `);
  });
});
