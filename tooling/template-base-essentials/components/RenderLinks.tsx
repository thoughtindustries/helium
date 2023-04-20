import React from 'react';

const RenderLinks = (props: {
  links: { [s: string]: unknown } | ArrayLike<unknown> | null;
  linkStyling: string | undefined;
  title: string | undefined;
}) => {
  const LINKS_ARRAY = [];
  if (typeof props.links === 'object' && !Array.isArray(props.links) && props.links !== null) {
    Object.entries(props.links).forEach(([key, value]) => {
      LINKS_ARRAY.push(
        <a href={key} className="flex">
          <img src="./renderer/single-dot.svg" className="h-6" />
          {value}
        </a>
      );
    });
  } else {
    throw new Error('props.links must be an Object');
  }
  return (
    <div className={props.linkStyling}>
      {props.title && <div className="text-xl font-bold text-black">{props.title}</div>}
      {LINKS_ARRAY}
    </div>
  );
};

export default RenderLinks;
