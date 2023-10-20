import {
  CourseGroupTestimonialsQuery,
  GetCourseDataQuery,
  GetLearningPathDataQuery
} from '../graphql';

export const MockGetCourseContentFactory = (): GetCourseDataQuery['CourseGroupBySlug'] => ({
  __typename: 'CourseGroup',
  id: '6648119f-9628-4c73-a45a-873c8ae2cda9',
  tabs: [
    {
      __typename: 'CourseTab',
      id: 'enubzul',
      label: 'Outline',
      body: '',
      tabType: 'syllabus',
      instructors: [],
      products: []
    },
    {
      __typename: 'CourseTab',
      id: 'z5gsnzt',
      label: 'Free Text Tab',
      body: '<p>This is the tab content</p>\n<p></p>\n<h1># Heading 1</h1><h2># Heading 2</h2><h3># Heading 3</h3>',
      tabType: 'free-text',
      instructors: [],
      products: []
    },
    {
      __typename: 'CourseTab',
      id: '1vo0oph',
      label: 'Instructor Title',
      body: '',
      tabType: 'instructors',
      instructors: [
        {
          __typename: 'Instructor',
          asset:
            'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/q_100,a_exif,c_crop,x_62,y_60,w_278,h_278/v1/course-uploads/71dba74a-e335-4c35-a04b-18ab05fa436a/varidc515546-ScreenShot2023-08-29at1.54.59PM.png',
          bio: '<p>Lelsie holds a Bachelor of Science degree in communciation from James Madision Univerisity...</p>',
          fullName: 'James Bond'
        }
      ],
      products: []
    },
    {
      __typename: 'CourseTab',
      id: 'gk3rh5b',
      label: 'Testimonials',
      body: '',
      tabType: 'testimonials',
      instructors: [],
      products: []
    },
    {
      __typename: 'CourseTab',
      id: 'xsvvcq3',
      label: 'Products',
      body: '',
      tabType: 'products',
      instructors: [],
      products: [
        {
          __typename: 'Product',
          id: '7f68c6f5-2a10-4d32-baec-64997102fecd',
          asset:
            'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/q_100,a_exif,c_crop,x_73,y_74,w_584,h_584/v1/course-uploads/71dba74a-e335-4c35-a04b-18ab05fa436a/t8teq5t3aywo-ScreenShot2023-10-03at8.06.36AM.png',
          name: 'Cookbook 2',
          priceInCents: 4800,
          alternativePricingRef: 0
        },
        {
          __typename: 'Product',
          id: '29460563-b53a-4524-8c99-a876b20e2cd2',
          asset:
            'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/q_100,a_exif,c_crop,x_73,y_74,w_584,h_584/v1/course-uploads/71dba74a-e335-4c35-a04b-18ab05fa436a/qlfn0l0542am-ScreenShot2023-10-03at8.06.36AM.png',
          name: 'Cookbook',
          priceInCents: 4800,
          alternativePricingRef: 0
        }
      ]
    }
  ]
});

export const MockGetLearningPathContentFactory =
  (): GetLearningPathDataQuery['LearningPathBySlug'] => ({
    __typename: 'LearningPath',
    id: '59f09b0f-0e92-4d7f-844a-97b29a756a96',
    name: 'Example Learning Path',
    tabs: {
      __typename: 'LearningPathTabs',
      tabs: [
        {
          __typename: 'LearningPathTab',
          id: 'wv7xy3d',
          label: 'Free Text Example',
          body: '<p>This is a free text tab</p><ul><li>list 1</li><li>list 2</li><li>list 3</li></ul>\n<p><em>this is italic text</em><br></p>',
          tabType: 'free-text',
          instructors: [],
          products: []
        },
        {
          __typename: 'LearningPathTab',
          id: 'a5tw8xt',
          label: 'Products Tab Title',
          body: '',
          tabType: 'products',
          instructors: [],
          products: [
            {
              __typename: 'Product',
              id: '29460563-b53a-4524-8c99-a876b20e2cd2',
              asset:
                'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/q_100,a_exif,c_crop,x_73,y_74,w_584,h_584/v1/course-uploads/71dba74a-e335-4c35-a04b-18ab05fa436a/qlfn0l0542am-ScreenShot2023-10-03at8.06.36AM.png',
              name: 'Cookbook',
              priceInCents: 4800,
              alternativePricingRef: 0
            }
          ]
        },
        {
          __typename: 'LearningPathTab',
          id: 'dgq1k1c',
          label: 'Instructors',
          body: '',
          tabType: 'instructors',
          instructors: [
            {
              __typename: 'Instructor',
              asset: '',
              bio: '<p>Jack is a great teacher!!</p>',
              fullName: 'Jack Antico'
            }
          ],
          products: []
        }
      ]
    }
  });

export const MockedGetTestimonialsContentFactory =
  (): CourseGroupTestimonialsQuery['CourseGroupTestimonials'] => [
    {
      __typename: 'Testimonial',
      id: '4724501b-68aa-4116-9c77-27964eed6c270',
      createdAt: '2023-10-02T15:38:47.369Z',
      user: {
        __typename: 'User',
        name: 'GRANT Antico7',
        asset:
          'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/q_100,a_exif,c_crop,x_64,y_42,w_339,h_339/v1/course-uploads/71dba74a-e335-4c35-a04b-18ab05fa436a/nkc8erqyn1ow-ScreenShot2023-10-02at11.40.34AM.png'
      },
      body: "estimated 200 charecters. I love this course so much it's so good!",
      rating: 80
    },
    {
      __typename: 'Testimonial',
      id: '4724501b-68aa-4116-9c77-27964eed6c271',
      createdAt: '2023-10-02T15:38:47.369Z',
      user: {
        __typename: 'User',
        name: 'GRANT Antico7',
        asset:
          'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/q_100,a_exif,c_crop,x_64,y_42,w_339,h_339/v1/course-uploads/71dba74a-e335-4c35-a04b-18ab05fa436a/nkc8erqyn1ow-ScreenShot2023-10-02at11.40.34AM.png'
      },
      body: "estimated 200 charecters. I love this course so much it's so good!",
      rating: 40
    },
    {
      __typename: 'Testimonial',
      id: '4724501b-68aa-4116-9c77-27964eed6c272',
      createdAt: '2023-10-02T15:38:47.369Z',
      user: {
        __typename: 'User',
        name: 'GRANT Antico7',
        asset:
          'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/q_100,a_exif,c_crop,x_64,y_42,w_339,h_339/v1/course-uploads/71dba74a-e335-4c35-a04b-18ab05fa436a/nkc8erqyn1ow-ScreenShot2023-10-02at11.40.34AM.png'
      },
      body: "estimated 200 charecters. I love this course so much it's so good!",
      rating: 20
    },
    {
      __typename: 'Testimonial',
      id: '4724501b-68aa-4116-9c77-27964eed6c273',
      createdAt: '2023-10-02T15:38:47.369Z',
      user: {
        __typename: 'User',
        name: 'GRANT Antico7',
        asset:
          'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/q_100,a_exif,c_crop,x_64,y_42,w_339,h_339/v1/course-uploads/71dba74a-e335-4c35-a04b-18ab05fa436a/nkc8erqyn1ow-ScreenShot2023-10-02at11.40.34AM.png'
      },
      body: "estimated 200 charecters. I love this course so much it's so good!",
      rating: 20
    },
    {
      __typename: 'Testimonial',
      id: '4724501b-68aa-4116-9c77-27964eed6c274',
      createdAt: '2023-10-02T15:38:47.369Z',
      user: {
        __typename: 'User',
        name: 'GRANT Antico7',
        asset:
          'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/q_100,a_exif,c_crop,x_64,y_42,w_339,h_339/v1/course-uploads/71dba74a-e335-4c35-a04b-18ab05fa436a/nkc8erqyn1ow-ScreenShot2023-10-02at11.40.34AM.png'
      },
      body: "estimated 200 charecters. I love this course so much it's so good!",
      rating: 20
    },
    {
      __typename: 'Testimonial',
      id: '4724501b-68aa-4116-9c77-27964eed6c275',
      createdAt: '2023-10-02T15:38:47.369Z',
      user: {
        __typename: 'User',
        name: 'GRANT Antico7',
        asset:
          'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/q_100,a_exif,c_crop,x_64,y_42,w_339,h_339/v1/course-uploads/71dba74a-e335-4c35-a04b-18ab05fa436a/nkc8erqyn1ow-ScreenShot2023-10-02at11.40.34AM.png'
      },
      body: "estimated 200 charecters. I love this course so much it's so good!",
      rating: 40
    },
    {
      __typename: 'Testimonial',
      id: '4724501b-68aa-4116-9c77-27964eed6c276',
      createdAt: '2023-10-02T15:38:47.369Z',
      user: {
        __typename: 'User',
        name: 'GRANT Antico7',
        asset:
          'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/q_100,a_exif,c_crop,x_64,y_42,w_339,h_339/v1/course-uploads/71dba74a-e335-4c35-a04b-18ab05fa436a/nkc8erqyn1ow-ScreenShot2023-10-02at11.40.34AM.png'
      },
      body: "estimated 200 charecters. I love this course so much it's so good!",
      rating: 80
    },
    {
      __typename: 'Testimonial',
      id: '4724501b-68aa-4116-9c77-27964eed6c277',
      createdAt: '2023-10-02T15:38:47.369Z',
      user: {
        __typename: 'User',
        name: 'GRANT Antico7',
        asset:
          'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/q_100,a_exif,c_crop,x_64,y_42,w_339,h_339/v1/course-uploads/71dba74a-e335-4c35-a04b-18ab05fa436a/nkc8erqyn1ow-ScreenShot2023-10-02at11.40.34AM.png'
      },
      body: "estimated 200 charecters. I love this course so much it's so good!",
      rating: 100
    }
  ];
