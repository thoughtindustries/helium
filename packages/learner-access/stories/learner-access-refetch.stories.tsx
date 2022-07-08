import { Meta, Story } from '@storybook/react';
import React from 'react';
import { LearnerAccess, LearnerAccessProps } from '../src';
import {
  UserContentItemsDocument,
  UserArchivesDocument,
  UserCertificatesDocument,
  UserBookmarksDocument,
  UserBookmarksByFolderDocument,
  UserWaitlistDocument,
  ContentGroupsDocument,
  ArchiveUserCourseDocument,
  UnenrollFromWaitlistDocument,
  ArchiveUserLearningPathDocument,
  GlobalTypes,
  ReinstateUserCourseDocument,
  UserCourseCompletionProgressDocument,
  UserCourseProgressDocument,
  UserCourseAwardCountsDocument,
  UserCourseCollaborationsDocument,
  UserContentItemsQueryVariables,
  ReinstateUserLearningPathDocument
} from '@thoughtindustries/content';
import { LearnerAccessRepository, UserContentItemTypes } from './repository';

export default {
  title: 'Example/LearnerAccess (refetch)',
  component: LearnerAccess,
  argTypes: {
    allowCollapse: {
      name: 'allowCollapse',
      type: { name: 'boolean', required: false },
      description: 'Determines if the learner access widget should collapse',
      control: { type: 'boolean' }
    },
    allowContentArchive: {
      name: 'allowContentArchive',
      type: { name: 'boolean', required: false },
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
      description: 'Determines if learner access widget is collapsible by default',
      control: { type: 'boolean' }
    }
  }
} as Meta;

const repository = new LearnerAccessRepository();
const mockApolloUserContentGroupsResults = {
  request: {
    query: ContentGroupsDocument
  },
  result: {
    data: {
      UserContentGroups: repository.contentGroups
    }
  },
  newData: () => ({
    data: {
      UserContentGroups: repository.contentGroups
    }
  })
};
const mockApolloUserContentItemsResultsFactory = (type: UserContentItemTypes) => {
  let variables: UserContentItemsQueryVariables = {};
  let results: any;
  switch (type) {
    case UserContentItemTypes.MyLearning:
      variables = {
        kind: ['courseGroup', 'article', 'video', 'shareableContentObject', 'xApiObject']
      };
      results = repository.myLearningItems;
      break;
    case UserContentItemTypes.Event:
      variables = {
        kind: ['webinar', 'webinarCourse', 'inPersonEvent', 'inPersonEventCourse'],
        sort: 'displayDate'
      };
      results = repository.eventItems;
      break;
    case UserContentItemTypes.LearningPath:
      variables = {
        kind: ['learningPath']
      };
      results = repository.learningPathItems;
      break;
    case UserContentItemTypes.Completed:
      variables = {
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
        ]
      };
      results = repository.completedItems;
      break;
  }
  return {
    request: {
      query: UserContentItemsDocument,
      variables
    },
    result: {
      data: {
        UserContentItems: results
      }
    },
    newData: () => ({
      data: {
        UserContentItems: results
      }
    })
  };
};
const mockApolloUserArchivesResults = {
  request: {
    query: UserArchivesDocument
  },
  result: {
    data: {
      UserArchives: repository.archivedItems
    }
  },
  newData: () => ({
    data: {
      UserArchives: repository.archivedItems
    }
  })
};
const mockApolloUserWaitlistsResults = {
  request: {
    query: UserWaitlistDocument
  },
  result: {
    data: {
      UserWaitlist: repository.waitlistItems
    }
  },
  newData: () => ({
    data: {
      UserWaitlist: repository.waitlistItems
    }
  })
};
const mockApolloArchiveMutationFactory = (type: UserContentItemTypes) => {
  const mockMutations: any = [];
  const mutationFactory = (id: string, kind: GlobalTypes.ContentKind) => {
    const requestQuery =
      kind === GlobalTypes.ContentKind.LearningPath
        ? ArchiveUserLearningPathDocument
        : ArchiveUserCourseDocument;
    return {
      request: {
        query: requestQuery,
        variables: { id }
      },
      result() {
        const repoResult = repository.archive(id, kind);
        const resultData =
          kind === GlobalTypes.ContentKind.LearningPath
            ? { ArchiveUserLearningPath: repoResult }
            : { ArchiveUserCourse: repoResult };
        return {
          data: resultData
        };
      }
    };
  };
  switch (type) {
    case UserContentItemTypes.MyLearning:
      repository.myLearningItems.forEach(({ id, kind }) => {
        mockMutations.push(mutationFactory(id, kind as GlobalTypes.ContentKind));
      });
      break;
    case UserContentItemTypes.Event:
      repository.eventItems.forEach(({ id, kind }) => {
        mockMutations.push(mutationFactory(id, kind as GlobalTypes.ContentKind));
      });
      break;
    case UserContentItemTypes.LearningPath:
      repository.learningPathItems.forEach(({ id, kind }) => {
        mockMutations.push(mutationFactory(id, kind as GlobalTypes.ContentKind));
      });
      break;
  }
  return mockMutations;
};
const mockApolloReinstateMutationFactory = (type: UserContentItemTypes) => {
  const mockMutations: any = [];
  const mutationFactory = (id: string, kind: GlobalTypes.ContentKind) => {
    const requestQuery =
      kind === GlobalTypes.ContentKind.LearningPath
        ? ReinstateUserLearningPathDocument
        : ReinstateUserCourseDocument;
    return {
      request: {
        query: requestQuery,
        variables: { id }
      },
      result() {
        const repoResult = repository.reinstate(id, kind);
        const resultData =
          kind === GlobalTypes.ContentKind.LearningPath
            ? { ReinstateUserLearningPath: repoResult }
            : { ReinstateUserCourse: repoResult };
        return {
          data: resultData
        };
      }
    };
  };
  switch (type) {
    case UserContentItemTypes.MyLearning:
      repository.myLearningItems.forEach(({ id, kind }) => {
        mockMutations.push(mutationFactory(id, kind as GlobalTypes.ContentKind));
      });
      break;
    case UserContentItemTypes.Event:
      repository.eventItems.forEach(({ id, kind }) => {
        mockMutations.push(mutationFactory(id, kind as GlobalTypes.ContentKind));
      });
      break;
    case UserContentItemTypes.LearningPath:
      repository.learningPathItems.forEach(({ id, kind }) => {
        mockMutations.push(mutationFactory(id, kind as GlobalTypes.ContentKind));
      });
      break;
  }
  return mockMutations;
};
const mockApolloUnenrollWaitlistMutationFactory = () => {
  const mockMutations: any = [];
  const mutationFactory = (id: string) => {
    return {
      request: {
        query: UnenrollFromWaitlistDocument,
        variables: { id }
      },
      result() {
        const repoResult = repository.unenrollWaitlist(id);
        return {
          data: { UnenrollFromWaitlist: repoResult }
        };
      }
    };
  };
  repository.waitlistItems.forEach(({ id }) => {
    mockMutations.push(mutationFactory(id));
  });
  return mockMutations;
};
const mockApolloQueryResults = [
  mockApolloUserContentGroupsResults,
  mockApolloUserContentItemsResultsFactory(UserContentItemTypes.MyLearning),
  mockApolloUserContentItemsResultsFactory(UserContentItemTypes.Event),
  mockApolloUserContentItemsResultsFactory(UserContentItemTypes.LearningPath),
  mockApolloUserContentItemsResultsFactory(UserContentItemTypes.Completed),
  mockApolloUserArchivesResults,
  mockApolloUserWaitlistsResults
];
const mockApolloResults = mockApolloQueryResults.concat(
  mockApolloArchiveMutationFactory(UserContentItemTypes.MyLearning),
  mockApolloArchiveMutationFactory(UserContentItemTypes.Event),
  mockApolloArchiveMutationFactory(UserContentItemTypes.LearningPath),
  mockApolloReinstateMutationFactory(UserContentItemTypes.MyLearning),
  mockApolloReinstateMutationFactory(UserContentItemTypes.Event),
  mockApolloReinstateMutationFactory(UserContentItemTypes.LearningPath),
  mockApolloUnenrollWaitlistMutationFactory()
);

const Template: Story<LearnerAccessProps> = args => (
  <LearnerAccess {...args} companyEnableExternalCertificateUploads companyHasWaitlistingFeature />
);
export const Base = Template.bind({});
Base.args = {
  allowCollapse: false,
  allowContentArchive: false,
  collapseDefault: false
};
Base.parameters = {
  apolloClient: {
    addTypename: false,
    mocks: mockApolloResults
  }
};
