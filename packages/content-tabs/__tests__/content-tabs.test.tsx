import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { ContentTabs } from '../src';
import { GetCourseDataDocument, GetLearningPathDataDocument } from '../src/graphql';
import { ContentKind } from '../src/graphql/global-types';
import {
  MockGetCourseContentFactory,
  MockGetLearningPathContentFactory
} from '../stories/ContentTabs.stories';

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

const mockApolloCourseResults = {
  request: {
    query: GetCourseDataDocument,
    variables: {
      slug: 'course-example'
    }
  },
  result: {
    data: { CourseGroupBySlug: MockGetCourseContentFactory() }
  }
};

const mockApolloLearningPathResults = {
  request: {
    query: GetLearningPathDataDocument,
    variables: {
      slug: 'example-learning-path'
    }
  },
  result: {
    data: { LearningPathBySlug: MockGetLearningPathContentFactory() }
  }
};

describe('@thoughtindustries/content-tabs', () => {
  describe('Content Tabs', () => {
    it('should render content-tabs component with Course content', async () => {
      const { container } = render(
        <MockedProvider mocks={[mockApolloCourseResults]} addTypename={false}>
          <ContentTabs tabsView={true} contentKind={ContentKind.Course} slug="course-example" />
        </MockedProvider>
      );

      expect(container).toMatchInlineSnapshot(`
      <div>
        <ul class="gap-x-6 border-b border-gray-300 px-8 sm:flex hidden pt-4" role="tablist">
          <li class="pb-4 px-2 border-b-2 border-blue-500 mb-[-1px] cursor-pointer" tabindex="0" role="tab"
              aria-selected="true"><span class="font-medium text-sm leading-normal text-blue-500">Outline</span></li>
          <li class="pb-4 px-2 border-b-2 border-transparent mb-[-1px] cursor-pointer" tabindex="0" role="tab"
              aria-selected="false"><span class="font-medium text-sm leading-normal ">Free Text Tab</span></li>
          <li class="pb-4 px-2 border-b-2 border-transparent mb-[-1px] cursor-pointer" tabindex="0" role="tab"
              aria-selected="false"><span class="font-medium text-sm leading-normal ">Instructor Title</span></li>
          <li class="pb-4 px-2 border-b-2 border-transparent mb-[-1px] cursor-pointer" tabindex="0" role="tab"
              aria-selected="false"><span class="font-medium text-sm leading-normal ">Testimonials</span></li>
          <li class="pb-4 px-2 border-b-2 border-transparent mb-[-1px] cursor-pointer" tabindex="0" role="tab"
              aria-selected="false"><span class="font-medium text-sm leading-normal ">Products</span></li>
        </ul>
        <div class="block sm:hidden relative">
          <h4
            class="font-normal text-base leading-6 border border-gray-300 px-3 py-2 rounded bg-gray-50 flex items-center justify-between">
            <span>Outline</span><span class="mt-[2px]"><svg width="14" height="9" viewBox="0 0 14 9" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"><path
            d="M12.8333 1.5L6.99996 7.33333L1.16663 1.5" stroke="#6B7280" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round"></path></svg></span></h4>
          <ul class="hidden absolute bg-gray-50 w-full mt-1 rounded border border-gray-300 pt-2 pb-0 px-2">
            <li class="pb-3 px-2 flex items-center justify-between cursor-pointer"><span
              class="text-sm leading-normal font-semibold">Outline</span>
              <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.875 1.62549L5.125 10.3751L0.75 6.00049" stroke="#0075B4" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </li>
            <li class="pb-3 px-2 flex items-center justify-between cursor-pointer"><span
              class="text-sm leading-normal font-normal">Free Text Tab</span></li>
            <li class="pb-3 px-2 flex items-center justify-between cursor-pointer"><span
              class="text-sm leading-normal font-normal">Instructor Title</span></li>
            <li class="pb-3 px-2 flex items-center justify-between cursor-pointer"><span
              class="text-sm leading-normal font-normal">Testimonials</span></li>
            <li class="pb-3 px-2 flex items-center justify-between cursor-pointer"><span
              class="text-sm leading-normal font-normal">Products</span></li>
          </ul>
        </div>
        <div class="px-8 pt-8"></div>
      </div>
      `);
    });

    it('should render content-tabs component with Course content without Tabs', async () => {
      const { container } = render(
        <MockedProvider mocks={[mockApolloCourseResults]} addTypename={false}>
          <ContentTabs tabsView={false} contentKind={ContentKind.Course} slug="course-example" />
        </MockedProvider>
      );
      expect(container).toMatchInlineSnapshot(`
      <div>
        <div class="px-8 pt-8">
          <div class="mb-10 pb-10 pt-10 border-b border-gray-300"></div>
          <div class="mb-10 pb-10 pt-10 border-b border-gray-300">
            <div><p>This is the tab content</p>
              <p></p>
              <h1># Heading 1</h1>
              <h2># Heading 2</h2>
              <h3># Heading 3</h3></div>
          </div>
          <div class="mb-10 pb-10 pt-10 border-b border-gray-300">
            <div>
              <div class="flex flex-col mb-10 md:flex-row items-start"><img
                src="https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/q_100,a_exif,c_crop,x_62,y_60,w_278,h_278/v1/course-uploads/71dba74a-e335-4c35-a04b-18ab05fa436a/varidc515546-ScreenShot2023-08-29at1.54.59PM.png"
                alt="James Bond" class="rounded-full h-auto w-auto mb-4 mr-3 md:block hidden"
                style="width: 124px; height: 124px;"><img
                src="https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/q_100,a_exif,c_crop,x_62,y_60,w_278,h_278/v1/course-uploads/71dba74a-e335-4c35-a04b-18ab05fa436a/varidc515546-ScreenShot2023-08-29at1.54.59PM.png"
                alt="James Bond" class="rounded-full h-auto w-auto mb-4 md:hidden self-center"
                style="width: 124px; height: 124px;">
                <div class="inline-block px-4"><h3 class="font-semibold text-4xl mt-2 leading-8 mb-2">James Bond</h3>
                  <div class="max-w-screen-lg font-normal text-base leading-7 text-gray-500"><p>Lelsie holds a Bachelor of
                    Science degree in communciation from James Madision Univerisity... blah blah blah blah blah&nbsp;blah blah
                    blah blah blah&nbsp;blah blah blah blah blah&nbsp;blah blah blah blah blah&nbsp;blah blah blah blah blah&nbsp;blah
                    blah blah blah blah&nbsp;blah blah blah blah blah&nbsp;</p></div>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-10 pb-10 pt-10 border-b border-gray-300">
            <div>
              <div class="flex justify-center pt-10">
                <button class="border font-normal text-base leading-5 px-3 py-2 rounded border-gray-300 hover:bg-slate-100">
                  Show all reviews
                </button>
              </div>
            </div>
          </div>
          <div class="mb-10 pb-10 pt-10 border-b border-gray-300">
            <div class="flex flex-wrap gap-5">
              <div class="w-80 rounded-md shadow-lg"><img
                src="https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/q_100,a_exif,c_crop,x_73,y_74,w_584,h_584/v1/course-uploads/71dba74a-e335-4c35-a04b-18ab05fa436a/t8teq5t3aywo-ScreenShot2023-10-03at8.06.36AM.png"
                alt="Cookbook 2" class="rounded-t">
                <div class="p-10 border border-t-0 rounded-b border-gray-300"><h3
                  class="font-semibold text-xl leading-7 break-words mb-2" style="word-break: break-word;">Cookbook 2</h3>
                  <span class="font-normal text-base leading-6 mr-2">$48.00</span></div>
              </div>
              <div class="w-80 rounded-md shadow-lg"><img
                src="https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/q_100,a_exif,c_crop,x_73,y_74,w_584,h_584/v1/course-uploads/71dba74a-e335-4c35-a04b-18ab05fa436a/qlfn0l0542am-ScreenShot2023-10-03at8.06.36AM.png"
                alt="Cookbook" class="rounded-t">
                <div class="p-10 border border-t-0 rounded-b border-gray-300"><h3
                  class="font-semibold text-xl leading-7 break-words mb-2" style="word-break: break-word;">Cookbook</h3><span
                  class="font-normal text-base leading-6 mr-2">$48.00</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      `);
    });

    it('should render content-tabs component with Learning Path content', async () => {
      const { container } = render(
        <MockedProvider mocks={[mockApolloLearningPathResults]} addTypename={false}>
          <ContentTabs
            tabsView={true}
            contentKind={ContentKind.LearningPath}
            slug="example-learning-path"
          />
        </MockedProvider>
      );
      expect(container).toMatchInlineSnapshot(`
      <div>
        <ul class="gap-x-6 border-b border-gray-300 px-8 sm:flex hidden pt-4" role="tablist">
          <li class="pb-4 px-2 border-b-2 border-blue-500 mb-[-1px] cursor-pointer" tabindex="0" role="tab" aria-selected="true">
            <span class="font-medium text-sm leading-normal text-blue-500">Free Text Example</span>
          </li>
          <li class="pb-4 px-2 border-b-2 border-transparent mb-[-1px] cursor-pointer" tabindex="0" role="tab" aria-selected="false">
          <span class="font-medium text-sm leading-normal ">Products Tab Title</span>
          </li>
          <li class="pb-4 px-2 border-b-2 border-transparent mb-[-1px] cursor-pointer" tabindex="0" role="tab" aria-selected="false">
            <span class="font-medium text-sm leading-normal ">Instructors</span>
          </li>
        </ul>
        <div class="block sm:hidden relative">
          <h4 class="font-normal text-base leading-6 border border-gray-300 px-3 py-2 rounded bg-gray-50 flex items-center justify-between">
            <span>Free Text Example</span>
            <span class="mt-[2px]">
              <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.8333 1.5L6.99996 7.33333L1.16663 1.5" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </span>
          </h4>
          <ul class="hidden absolute bg-gray-50 w-full mt-1 rounded border border-gray-300 pt-2 pb-0 px-2">
            <li class="pb-3 px-2 flex items-center justify-between cursor-pointer">
              <span class="text-sm leading-normal font-semibold">Free Text Example</span>
              <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.875 1.62549L5.125 10.3751L0.75 6.00049" stroke="#0075B4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </li>
            <li class="pb-3 px-2 flex items-center justify-between cursor-pointer">
              <span class="text-sm leading-normal font-normal">Products Tab Title</span>
            </li>
            <li class="pb-3 px-2 flex items-center justify-between cursor-pointer">
              <span class="text-sm leading-normal font-normal">Instructors</span>
            </li>
          </ul>
        </div>
        <div class="px-8 pt-8">
          <div><p>This is a free text tab blah blah blah</p>
            <ul>
              <li>list 1</li>
              <li>list 2</li>
              <li>list 3</li>
            </ul>
            <p><em>this is italic text</em><br></p></div>
        </div>
      </div>
      `);
    });

    it('should render content-tabs component with Learning Path content without Tabs', async () => {
      const { container } = render(
        <MockedProvider mocks={[mockApolloLearningPathResults]} addTypename={false}>
          <ContentTabs
            tabsView={false}
            contentKind={ContentKind.LearningPath}
            slug="example-learning-path"
          />
        </MockedProvider>
      );
      expect(container).toMatchInlineSnapshot(`
      <div>
        <div class="px-8 pt-8">
          <div class="mb-10 pb-10 pt-10 border-b border-gray-300">
            <div><p>This is a free text tab blah blah blah</p>
              <ul>
                <li>list 1</li>
                <li>list 2</li>
                <li>list 3</li>
              </ul>
              <p><em>this is italic text</em><br></p></div>
          </div>
          <div class="mb-10 pb-10 pt-10 border-b border-gray-300">
            <div class="flex flex-wrap gap-5">
              <div class="w-80 rounded-md shadow-lg"><img src="https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/q_100,a_exif,c_crop,x_73,y_74,w_584,h_584/v1/course-uploads/71dba74a-e335-4c35-a04b-18ab05fa436a/qlfn0l0542am-ScreenShot2023-10-03at8.06.36AM.png" alt="Cookbook" class="rounded-t">
                <div class="p-10 border border-t-0 rounded-b border-gray-300">
                  <h3 class="font-semibold text-xl leading-7 break-words mb-2" style="word-break: break-word;">Cookbook</h3>
                  <span class="font-normal text-base leading-6 mr-2">$48.00</span>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-10 pb-10 pt-10 border-b border-gray-300">
            <div>
              <div class="flex flex-col mb-10 md:flex-row items-start">
              <img src="" alt="Jack Antico" class="rounded-full h-auto w-auto mb-4 mr-3 md:block hidden" style="width: 124px; height: 124px;">
              <img src="" alt="Jack Antico" class="rounded-full h-auto w-auto mb-4 md:hidden self-center" style="width: 124px; height: 124px;">
                <div class="inline-block px-4"><h3 class="font-semibold text-4xl mt-2 leading-8 mb-2">Jack Antico</h3>
                  <div class="max-w-screen-lg font-normal text-base leading-7 text-gray-500"><p>Jack is a great teacher!!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      `);
    });
  });
});
