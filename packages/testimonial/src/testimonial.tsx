import React from 'react';
import { TestimonialProps } from './types';

const Testimonial = ({
  quote,
  username,
  description,
  backgroundColor,
  textColor,
  alignment
}: TestimonialProps): JSX.Element => {
  const styles = {
    container: {
      backgroundColor: backgroundColor,
      textAlign: alignment as 'center'
    },
    quote: {
      color: textColor,
      fontSize: 36,
      '@media (max-width: 48em)': {
        fontSize: 12
      }
    },
    username: {
      color: textColor,
      fontSize: 22,
      position: 'relative' as const,
      paddingTop: '0.5em',
      margin: 0,
      borderTop: '1px solid',
      fontStyle: 'italic',
      '@media (max-width: 48em)': {
        fontSize: 12
      }
    },
    description: {
      color: textColor,
      fontSize: 16,
      fontStyle: 'italic',
      '@media (max-width: 48em)': {
        fontSize: 12
      }
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.quote}>{quote}</h1>
      <p style={styles.username}>{username}</p>
      <p style={styles.description}>{description}</p>
    </div>
  );
};

Testimonial.displayName = 'Testimonial';

export default Testimonial;
