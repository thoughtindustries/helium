import React from 'react';
import { InstructorType, InstructorProps } from './types';

const Instructor = (props: InstructorProps): JSX.Element => {
  const { instructors } = props;

  return (
    <div>
      {instructors?.map((instructor: InstructorType, i: number) => (
        <div key={i} className="flex flex-col mb-10 md:flex-row items-start">
          <img
            src={instructor.asset}
            alt={instructor.fullName}
            className="rounded-full h-auto w-auto mb-4 mr-3 md:block hidden"
            style={{ width: '124px', height: '124px' }}
          />

          <img
            src={instructor.asset}
            alt={instructor.fullName}
            className="rounded-full h-auto w-auto mb-4 md:hidden self-center"
            style={{ width: '124px', height: '124px' }}
          />

          <div className="inline-block px-4">
            <h3 className="font-semibold text-4xl mt-2 leading-8 mb-2">{instructor.fullName}</h3>
            <div
              className="max-w-screen-lg font-normal text-base leading-7 text-gray-500"
              dangerouslySetInnerHTML={{ __html: instructor.bio as string }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

Instructor.displayName = 'Instructor';

export default Instructor;
