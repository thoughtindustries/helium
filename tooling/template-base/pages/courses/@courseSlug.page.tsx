import React from 'react';
// import NavBar from '../../../../../helium-apps/2025/add-course-detail-to-template-base/components/Navigation/NavBar';
const NavBar = () => <div>NavBar Placeholder</div>;
import { ContentHeader, GlobalTypes } from '@thoughtindustries/content';
import { CourseGroup } from '@thoughtindustries/content/src/graphql/global-types';

export { Page };
export { documentProps };

interface PageProps {
  courseGroup: CourseGroup | null;
  error?: string;
}

const documentProps = {
  title: 'Course Detail',
  description: 'Course detail page'
};

function Page({ courseGroup, error }: PageProps) {
  if (error) {
    return (
      <div className="min-h-screen bg-white">
        <NavBar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
            <div className="text-center">
              <div className="text-red-500 text-6xl mb-4">⚠️</div>
              <h1 className="text-xl font-semibold text-gray-900 mb-2">Error Loading Course</h1>
              <p className="text-gray-600">{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!courseGroup) {
    return (
      <div className="min-h-screen bg-white">
        <NavBar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading course...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Navigation */}
      <NavBar />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section - Main Content */}
          <div className="lg:col-span-2">
            {/* Content Header Component */}
            <div className="mb-8">
              <ContentHeader
                contentKind={GlobalTypes.ContentKind.CourseGroup}
                slug={courseGroup.slug}
                showStars={true}
                showImage={true}
              />
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 mt-10">
            <div className="space-y-6">
              {/* Enroll Today Box */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">ENROLL TODAY</h3>
                {courseGroup.courses && courseGroup.courses.length === 1 ? (
                  <a
                    href={`/learn/enroll/${courseGroup.courses[0].id}`}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-block text-center"
                  >
                    Enroll Now
                  </a>
                ) : courseGroup.courses && courseGroup.courses.length > 1 ? (
                  <div className="space-y-3">
                    {courseGroup.courses.map((course, index) => (
                      <div key={course.id} className="enroll-course-item">
                        <div className="flex items-center justify-between">
                          <div className="flex-1 mr-3">
                            <h6 className="text-sm font-semibold text-gray-800">
                              {course.title || `Course ${index + 1}`}
                            </h6>
                          </div>
                          <a
                            href={`/learn/enroll/${course.id}`}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm whitespace-nowrap"
                            title={`Enroll in ${course.title || `Course ${index + 1}`}`}
                          >
                            Enroll Now
                          </a>
                        </div>
                        {index < (courseGroup.courses?.length || 0) - 1 && (
                          <hr className="my-3 border-gray-200" />
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center text-gray-500">
                    <p>No courses available for enrollment</p>
                  </div>
                )}
              </div>

              {/* What's Included Box */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">WHAT&apos;S INCLUDED</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-700">
                      Access your courses anytime, anywhere, with a computer, tablet or smartphone
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-700">
                      Videos, quizzes and interactive content designed for a proven learning
                      experience
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-700">
                      Unlimited access. Take your courses at your time and pace
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <span className="text-sm text-gray-600">© Your Instances Sandbox</span>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <span className="text-sm text-gray-600">
                Powered By
                <br />
                <a href="#" className="text-blue-600 hover:text-blue-800 underline">
                  Thought Industries
                </a>
              </span>
              <span className="text-sm text-gray-600">
                Need Help?
                <br />
                <a href="#" className="text-blue-600 hover:text-blue-800 underline">
                  Contact Support
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
