import { Meta, Story } from '@storybook/react';
import React from 'react';
import { LearnerAccess, LearnerAccessProps } from '../src';
import { ContentItemsDocument } from '@thoughtindustries/content';

export default {
  title: 'Example/LearnerAccess',
  component: LearnerAccess,
  argTypes: {
    allowCollapse: {
      name: 'allowCollapse',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: 'Determines if the learner access widget should collapse',
      control: { type: 'boolean' }
    },
    allowContentArchive: {
      name: 'allowContentArchive',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: 'Allows archived content',
      control: { type: 'boolean' }
    },
    classNames: {
      name: 'classNames',
      type: { name: 'string', required: false },
      description: 'Space separated classnames provided as string',
      control: { type: 'string' }
    },
    collapseDefault: {
      name: 'collapseDefault',
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: 'Determines if learner access widget is collapsible by default',
      control: { type: 'boolean' }
    },
    displayExpiredCertificateInformation: {
      name: 'displayExpiredCertificateInformation',
      type: { name: 'boolean', required: false },
      description: 'Determines if we should display expired certificates',
      control: { type: 'boolean' }
    }
  }
} as Meta;

const defaultProps = {
  allowCollapse: false,
  allowContentArchive: false,
  classNames: '',
  collapseDefault: false,
  displayExpiredCertificateInformation: false,
  query: ''
};

const Template: Story<LearnerAccessProps> = () => <LearnerAccess {...defaultProps} />;

export const Base = Template.bind({});

Base.parameters = {
  apolloClient: {
    mocks: [
      {
        request: {
          query: ContentItemsDocument,
          variables: {
            query: '',
            kind: ['courseGroup', 'article', 'video', 'shareableContentObject', 'xApiObject'],
            sort: null
          }
        },
        result: {
          data: {
            availableCoursesCount: 1200,
            startedCoursesCount: 5
          }
        }
      },
      {
        request: {
          query: ContentItemsDocument,
          variables: {
            query: '',
            kind: ['webinar', 'webinarCourse', 'inPersonEvent', 'inPersonEventCourse'],
            sort: null
          }
        },
        result: {
          data: {
            availableCoursesCount: 1200,
            startedCoursesCount: 5,
            completedCoursesCount: 10,
            certificatesCount: 3,
            collaborationsCount: 1
          }
        }
      },
      {
        request: {
          query: ContentItemsDocument,
          variables: {
            query: '',
            kind: ['learningPath'],
            sort: null
          }
        },
        result: {
          data: {
            availableCoursesCount: 1200,
            startedCoursesCount: 5,
            completedCoursesCount: 10,
            certificatesCount: 3,
            collaborationsCount: 1
          }
        }
      },
      {
        request: {
          query: ContentItemsDocument,
          variables: {
            query: '',
            kind: [
              'learningPath',
              'courseGroup',
              'article',
              'video',
              'shareableContentObject',
              'xApiObject',
              'webinar',
              'webinarCourse',
              'inPersonEvent',
              'inPersonEventCourse'
            ],
            sort: null
          }
        },
        result: {
          data: {
            availableCoursesCount: 1200
          }
        }
      }
    ]
  }
};
