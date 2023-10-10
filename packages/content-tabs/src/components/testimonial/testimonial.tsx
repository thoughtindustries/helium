import React, { createRef, useEffect, useMemo, useState } from 'react';
import { TestimonialProps } from './types';
import { CloseCrossIcon } from '../../icons';
import { useOnClickOutside } from '@thoughtindustries/hooks';
import { useCourseGroupTestimonialsQuery } from '../../graphql/queries/CourseGroupTestimonials.generated';
import { formatDistanceToNow } from 'date-fns';
import { LoadingDots } from '@thoughtindustries/content';

const Stars = (props: { score: number }) => {
  const maskWidth = `${props.score}%`;

  return (
    <svg width="90" height="18" viewBox="0 0 90 18">
      <symbol id="bg-star">
        <path
          d="M7.85879 1.51237C8.21879 0.407172 9.78239 0.407172 10.1412 1.51237L11.4252 5.46277C11.5036 5.70336 11.6561 5.91299 11.8609 6.0617C12.0656 6.21041 12.3121 6.29059 12.5652 6.29077H16.7196C17.8824 6.29077 18.3648 7.77877 17.4252 8.46277L14.0652 10.9036C13.86 11.0524 13.7073 11.2624 13.6288 11.5034C13.5503 11.7444 13.5502 12.0041 13.6284 12.2452L14.9124 16.1956C15.2724 17.3008 14.0064 18.2212 13.0644 17.5372L9.70439 15.0964C9.49944 14.9476 9.25266 14.8674 8.99939 14.8674C8.74612 14.8674 8.49935 14.9476 8.29439 15.0964L4.93439 17.5372C3.99359 18.2212 2.72879 17.3008 3.08759 16.1956L4.37159 12.2452C4.4498 12.0041 4.44966 11.7444 4.37119 11.5034C4.29272 11.2624 4.13996 11.0524 3.93479 10.9036L0.575993 8.46397C-0.363607 7.77997 0.119993 6.29197 1.28159 6.29197H5.43479C5.68805 6.29204 5.93484 6.21198 6.13982 6.06325C6.34481 5.91452 6.49748 5.70475 6.57599 5.46397L7.85999 1.51357L7.85879 1.51237Z"
          fill="#D1D5DB"
        />
      </symbol>
      <symbol id="star">
        <path
          d="M7.85879 1.51237C8.21879 0.407172 9.78239 0.407172 10.1412 1.51237L11.4252 5.46277C11.5036 5.70336 11.6561 5.91299 11.8609 6.0617C12.0656 6.21041 12.3121 6.29059 12.5652 6.29077H16.7196C17.8824 6.29077 18.3648 7.77877 17.4252 8.46277L14.0652 10.9036C13.86 11.0524 13.7073 11.2624 13.6288 11.5034C13.5503 11.7444 13.5502 12.0041 13.6284 12.2452L14.9124 16.1956C15.2724 17.3008 14.0064 18.2212 13.0644 17.5372L9.70439 15.0964C9.49944 14.9476 9.25266 14.8674 8.99939 14.8674C8.74612 14.8674 8.49935 14.9476 8.29439 15.0964L4.93439 17.5372C3.99359 18.2212 2.72879 17.3008 3.08759 16.1956L4.37159 12.2452C4.4498 12.0041 4.44966 11.7444 4.37119 11.5034C4.29272 11.2624 4.13996 11.0524 3.93479 10.9036L0.575993 8.46397C-0.363607 7.77997 0.119993 6.29197 1.28159 6.29197H5.43479C5.68805 6.29204 5.93484 6.21198 6.13982 6.06325C6.34481 5.91452 6.49748 5.70475 6.57599 5.46397L7.85999 1.51357L7.85879 1.51237Z"
          fill="#FAAD4D"
        />
      </symbol>
      <mask id="bg-stars">
        <use href="#bg-star" transform="translate(0 0)" />
        <use href="#bg-star" transform="translate(18 0)" />
        <use href="#bg-star" transform="translate(36 0)" />
        <use href="#bg-star" transform="translate(54 0)" />
        <use href="#bg-star" transform="translate(72 0)" />
      </mask>
      <mask id="stars">
        <use href="#star" transform="translate(0 0)" />
        <use href="#star" transform="translate(18 0)" />
        <use href="#star" transform="translate(36 0)" />
        <use href="#star" transform="translate(54 0)" />
        <use href="#star" transform="translate(72 0)" />
      </mask>
      <rect x="0" y="0" width="100%" height="100%" fill="#D1D5DB" mask="url(#bg-stars)" />
      <rect x="0" y="0" width={maskWidth} height="100%" fill="#FAAD4D" mask="url(#stars)" />
    </svg>
  );
};

const Testimonial = (props: TestimonialProps): JSX.Element => {
  const { id } = props;
  const [openModal, setOpenModal] = useState(false);
  const wrapperRef = createRef<HTMLDivElement>();
  useOnClickOutside(wrapperRef, () => setOpenModal(false));

  const { data, loading } = useCourseGroupTestimonialsQuery({
    variables: {
      id: id
    }
  });

  const testimonialsToRender = useMemo(() => {
    return data?.CourseGroupTestimonials;
  }, [data]);

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

  const getTotalRatings = useMemo(() => {
    const ratings = (data?.CourseGroupTestimonials || []).map(testimonial =>
      typeof testimonial.rating === 'number' ? testimonial.rating : 0
    );
    const total = ratings.reduce((sum, rating) => sum + rating, 0);
    const averageRating = ratings.length > 0 ? total / ratings.length : 0;
    const roundedAverage = Math.round(averageRating / 20) * 20;

    return roundedAverage;
  }, [data]);

  const calculateDecimalRating = (rating: number) => {
    const ratingMap: { [key: number]: string } = {
      0: '0.0',
      20: '1.0',
      40: '2.0',
      60: '3.0',
      80: '4.0',
      100: '5.0'
    };

    return ratingMap[rating] || '0.0';
  };

  return (
    <div>
      <>
        {!loading ? (
          <>
            {testimonialsToRender &&
              testimonialsToRender.length > 0 &&
              testimonialsToRender.slice(0, 5).map(testimony => {
                return (
                  <div
                    key={testimony.id}
                    className="flex border-b border-gray-300 px-0 py-6 md:p-8"
                  >
                    <img
                      className="w-11 h-11 bg-gray-500 rounded-full mr-3"
                      src={testimony.user?.asset}
                      alt={testimony.user?.name}
                    />
                    <div>
                      <h3 className="font-bold text-base leading-6">{testimony.user?.name}</h3>
                      <div className="flex items-center mb-2">
                        <div className="flex mr-2 items-center">
                          <Stars score={testimony.rating as number} />
                          <span className="font-semibold text-sm leading-5 text-gray-500 pl-2 pt-1">
                            {testimony &&
                              testimony.createdAt &&
                              formatDistanceToNow(new Date(testimony.createdAt), {
                                addSuffix: true
                              })}
                          </span>
                        </div>
                      </div>
                      <span className="font-normal text-sm leading-7 text-gray-500">
                        {testimony.body}
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
                      <Stars score={getTotalRatings} />
                      <span className="font-semibold text-sm leading-5 ml-2">
                        {calculateDecimalRating(getTotalRatings)}
                        <span className="font-normal">
                          {' '}
                          ({testimonialsToRender?.length} Reviews){' '}
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="px-4" style={{ height: '70vh', overflowY: 'scroll' }}>
                    {testimonialsToRender &&
                      testimonialsToRender.length > 0 &&
                      testimonialsToRender.map((testimony, i: number) => {
                        return (
                          <div key={i} className="flex border-b border-gray-300 px-0 py-6 md:p-8">
                            <img
                              className="w-11 h-11 bg-gray-500 rounded-full mr-3"
                              src={testimony.user?.asset}
                              alt={testimony.user?.name}
                            />
                            <div>
                              <h3 className="font-bold text-base leading-6">
                                {testimony.user?.name}
                              </h3>
                              <div className="flex items-center mb-2">
                                <div className="flex mr-2 items-center">
                                  <Stars score={testimony.rating as number} />
                                  <span className="font-semibold text-sm leading-5 text-gray-500 pl-2 pt-1">
                                    {testimony &&
                                      testimony.createdAt &&
                                      formatDistanceToNow(new Date(testimony.createdAt), {
                                        addSuffix: true
                                      })}
                                  </span>
                                </div>
                              </div>
                              <span className="font-normal text-sm leading-7 text-gray-500">
                                {testimony.body}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="pt-8">
            <LoadingDots />
          </div>
        )}
      </>
    </div>
  );
};

Testimonial.displayName = 'Testimonial';

export default Testimonial;
