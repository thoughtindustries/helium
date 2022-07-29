import React from 'react';
import CallToActionParagraphs from './CallToActionParagraphs';

const LearningInfo = () => {
  return (
    <>
      <CallToActionParagraphs
        heading="Your source for learning, community and success."
        subheading="Find products, resources, and programs for every stage of your business journey."
        paragraphItems={[
          {
            heading: 'Learning Tools and Resources',
            content:
              'Our goal is to help you become successful by providing learning materials to improve yourself or your company on various topics, such as marketing, business, finance and design.',
            buttonText: 'View catalog',
            buttonUrl: '/catalog'
          },
          {
            heading: 'World Class Content',
            content:
              'Our content is curated for you. The Academy is focused on your everyday tasks and the goals you want to achieve.',
            buttonText: 'View catalog',
            buttonUrl: '/catalog'
          },
          {
            heading: 'World Class Content',
            content:
              'Our content is curated for you. The Academy is focused on your everyday tasks and the goals you want to achieve.',
            buttonText: 'View catalog',
            buttonUrl: '/catalog'
          }
        ]}
      />
    </>
  );
};

export default LearningInfo;
