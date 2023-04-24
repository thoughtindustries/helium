import React from 'react';

const RenderLinks = (props: {
  links: { [s: string]: unknown } | ArrayLike<unknown> | null;
  linkStyling: string | undefined;
  title: string | undefined;
}) => {
  const LINKS_ARRAY = [];
  if (props.links !== null) {
    console.log(props.links);
    for (let i = 0; i < props.links.length; i++) {
      LINKS_ARRAY.push(
        <a href={props.links[i].href} className="flex">
          <img src="./renderer/single-dot.svg" className="h-6" />
          {props.links[i].label}
        </a>
      );
    }
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
