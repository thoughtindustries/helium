import React from 'react';

const CommunityNav = () => {
  const NavElementArray = [
    {
      text: 'View Repo',
      image: './renderer/github.svg',
      link: 'https://github.com/thoughtindustries/helium'
    },
    {
      text: 'Join Community',
      image: './renderer/discord.svg',
      link: 'https://discord.gg/cTJBX4muVn'
    }
  ];

  const RenderNavElements = (props: {
    elements: Array<{ text: string; image?: string; link: string }>;
  }) => {
    const ElementsArray = [];
    for (let i = 0; i < props.elements.length; i++) {
      ElementsArray.push(
        <a href={props.elements[i].link} className="flex">
          {props.elements[i].image && <img src={props.elements[i].image} />}
          <div className="text-slate-600 underline px-1 font-semibold">
            {props.elements[i].text}
          </div>
        </a>
      );
    }
    return <>ElementsArray</>;
  };

  return (
    <div className="flex w-full pt-16 pr-10 lg:pr-80 justify-end space-x-3">
      <RenderNavElements elements={NavElementArray} />
    </div>
  );
};

export default CommunityNav;
