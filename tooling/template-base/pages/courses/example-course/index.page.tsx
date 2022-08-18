import React from 'react';
import Topic1 from './topics/01-test-topic.page.mdx';
import Topic2 from './topics/02-second-test-topic.page.mdx';
import Topic3 from './topics/03-test-topic.page.mdx';
import CourseLayout from './../../../components/CourseLayout';

export { Page };

function Page() {
  const coursePages = [<CoursePage1 key={1} />, <CoursePage2 key={2} />];

  return <CourseLayout title="Example Course" coursePages={coursePages} />;
}

function CoursePage1() {
  return (
    <div>
      <Topic1 />
      <Topic2 />
    </div>
  );
}

CoursePage1.label = 'Chapter 1';

function CoursePage2() {
  return (
    <div>
      <Topic3 />
    </div>
  );
}

CoursePage2.label = 'Chapter 2';
