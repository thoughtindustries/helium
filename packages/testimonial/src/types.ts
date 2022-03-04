import { ReactNode } from 'react';
export interface TestimonialProps {
  /** children */
  children: ReactNode;
}

export interface TestimonialCarouselProps {
  /** children */
  children: ReactNode;
  /** row item count in desktop view */
  desktopColumnCount: number;
}

export interface TestimonialItemProps {
  /** user's quote */
  quote: string;
  /** user's name */
  username: string;
  /** user's description */
  description: string;
  /** Testimonial background color */
  backgroundColor: string;
  /** Testimonial text color */
  textColor: string;
  /** Testimonial alignment */
  alignment: string;
  /** Image */
  asset: string;
}

export interface TestimonialMultiCarouselContextType {
  /** row item count in desktop view */
  desktopColumnCount: number;
}
