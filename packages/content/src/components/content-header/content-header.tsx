import React from 'react';
import { ContentKind } from '../../graphql/global-types';
import { useCourseGroupBySlugQuery } from '../../graphql/queries';

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

const ContentHeader = (props: {
  contentKind: ContentKind;
  slug: string;
  showStars: boolean;
  showImage: boolean;
}): JSX.Element => {
  const { data, error } = useCourseGroupBySlugQuery({
    variables: { Slug: props.slug }
  });

  if (error) {
    console.log(error);
  }

  return (
    // container
    <div className="py-24 px-20">
      <div className="px-1">
        {/* header */}
        <div className="text-5xl font-bold pb-2 font-primary">{data?.CourseGroupBySlug?.title}</div>
        {/* description */}
        <div className="text-lg text-slate-400 pb-2.5 font-primary">
          {data?.CourseGroupBySlug?.description}
        </div>
        {/* stars */}
        {props.showStars && (
          <div className="flex pb-8">
            {data?.CourseGroupBySlug?.rating && <Stars score={data?.CourseGroupBySlug?.rating} />}
            {data?.CourseGroupBySlug?.rating && (
              <div className="font-bold px-1">
                {(data?.CourseGroupBySlug?.rating / 20).toFixed(1)}
              </div>
            )}
            <div>({data?.CourseGroupBySlug?.ratingsCount} Reviews)</div>
          </div>
        )}
      </div>
      {/* image */}
      {props.showImage && data?.CourseGroupBySlug?.asset && (
        <img src={data.CourseGroupBySlug.asset} className="w-[600px]" />
      )}
    </div>
  );
};

ContentHeader.displayName = 'ContentHeader';
export default ContentHeader;
