import React, { createRef, useEffect, useState } from 'react';
import { TestimonialProps } from './types';
import { CloseCrossIcon, StarIcon } from '../../icons';
import { useOnClickOutside } from '@thoughtindustries/hooks';

const mockData = [
  {
    id: 0,
    mode: 'Reviewer',
    date: '1 day ago',
    estimatedCharacters: 'estimated 200 characters'
  },
  {
    id: 1,
    mode: 'Reviewer',
    date: '1 day ago',
    estimatedCharacters: 'estimated 200 characters'
  },
  {
    id: 2,
    mode: 'Reviewer',
    date: '1 day ago',
    estimatedCharacters: 'estimated 200 characters'
  },
  {
    id: 3,
    mode: 'Reviewer',
    date: '1 day ago',
    estimatedCharacters: 'estimated 200 characters'
  },
  {
    id: 4,
    mode: 'Reviewer',
    date: '1 day ago',
    estimatedCharacters: 'estimated 200 characters'
  }
];

const Testimonial = (props: TestimonialProps): JSX.Element => {
  const [openModal, setOpenModal] = useState(false);
  const wrapperRef = createRef<HTMLDivElement>();
  useOnClickOutside(wrapperRef, () => setOpenModal(false));

  useEffect(() => {
    const handleOverflowChange = () => {
      if (openModal) {
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
      }
    };

    handleOverflowChange();

    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, [openModal]);

  return (
    <div>
      {mockData.map(testimony => {
        return (
          <div key={testimony.id} className="flex border-b border-gray-300 px-0 py-6 md:p-8">
            <div className="w-11 h-11 bg-gray-500 rounded-full mr-3"></div>
            <div>
              <h3 className="font-bold text-base leading-6">{testimony.mode}</h3>
              <div className="flex items-center mb-2">
                <div className="flex mr-2">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <span className="font-semibold text-sm leading-5 text-gray-500">
                  {testimony.date}
                </span>
              </div>
              <span className="font-normal text-sm leading-7 text-gray-500">
                {testimony.estimatedCharacters}
              </span>
            </div>
          </div>
        );
      })}

      <div className="flex justify-center pt-10">
        <button
          className="border font-normal text-base leading-5 px-3 py-2 rounded border-gray-300 hover:bg-slate-100"
          onClick={() => setOpenModal(true)}
        >
          Show all reviews
        </button>
      </div>

      {openModal && (
        <div
          className="fixed bg-black flex justify-center items-center z-10"
          style={{ top: 0, right: 0, left: 0, bottom: 0, backgroundColor: '#0000007a' }}
        >
          <div ref={wrapperRef} className="bg-white max-w-screen-lg w-full pt-8 rounded-md">
            <div className="flex justify-between items-center px-8 pb-4 mx-3">
              <h3 className="font-semibold text-lg leading-7">All reviews</h3>
              <button onClick={() => setOpenModal(false)}>
                <CloseCrossIcon />
              </button>
            </div>
            <div className="px-8 mx-3 pb-4 flex items-center mb-2">
              <div className="flex mr-2">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
              <span className="font-semibold text-sm leading-5">
                5.0 <span className="font-normal">(207 Reviews) </span>
              </span>
            </div>
            <div className="px-4" style={{ height: '70vh', overflowY: 'scroll' }}>
              {mockData.map(testimony => {
                return (
                  <>
                    <div
                      key={testimony.id}
                      className="flex border-b border-gray-300 px-0 py-6 md:p-8"
                    >
                      <div className="w-11 h-11 bg-gray-500 rounded-full mr-3"></div>
                      <div>
                        <h3 className="font-bold text-base leading-6">{testimony.mode}</h3>
                        <div className="flex items-center mb-2">
                          <div className="flex mr-2">
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                          </div>
                          <span className="font-semibold text-sm leading-5 text-gray-500">
                            {testimony.date}
                          </span>
                        </div>
                        <span className="font-normal text-sm leading-7 text-gray-500">
                          {testimony.estimatedCharacters}
                        </span>
                      </div>
                    </div>
                    <div
                      key={testimony.id}
                      className="flex border-b border-gray-300 px-0 py-6 md:p-8"
                    >
                      <div className="w-11 h-11 bg-gray-500 rounded-full mr-3"></div>
                      <div>
                        <h3 className="font-bold text-base leading-6">{testimony.mode}</h3>
                        <div className="flex items-center mb-2">
                          <div className="flex mr-2">
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                          </div>
                          <span className="font-semibold text-sm leading-5 text-gray-500">
                            {testimony.date}
                          </span>
                        </div>
                        <span className="font-normal text-sm leading-7 text-gray-500">
                          {testimony.estimatedCharacters}
                        </span>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Testimonial.displayName = 'Testimonial';

export default Testimonial;
