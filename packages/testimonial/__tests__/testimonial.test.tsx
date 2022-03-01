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
  alignment: 'center'
};

describe('@thoughtindustries/testimonial', () => {
  describe('Testimonial', () => {
    it('should render', () => {
      const { container } = render(
        <Testimonial {...props}>
          <div></div>
        </Testimonial>
      );
      expect(container).toMatchInlineSnapshot('<div></div>');
    });
  });
});
