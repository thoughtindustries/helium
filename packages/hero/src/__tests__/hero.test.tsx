import React from "react";
import { render } from "@testing-library/react";
import { Hero } from "..";
import { HeroProps } from "../types";

describe("@thoughtindustries/hero", () => {
  it("should render", () => {
    const props: HeroProps = {
      title: "Title text",
      subtitle: "Subtitle text",
      asset: "https://asset.com/1.png",
      linkText: "This is a link",
      linkUrl: "https://www.google.com",
      linkOpenInNewTab: true,
    };
    const { container } = render(<Hero {...props} />);
    expect(container).toMatchInlineSnapshot(`
<div>
  <div
    class="overflow-hidden relative"
  >
    <picture
      class="inline-block w-full"
    >
      <source
        media="(min-width: 48em)"
        srcset="https://asset.com/1.png"
      />
      <img
        alt="Title text"
        class="w-full"
        src="https://asset.com/1.png"
      />
    </picture>
    <div
      class="w-full p-8 md:absolute md:left-0 md:bg-white md:bg-opacity-80 md:bottom-8"
    >
      <h2
        class="text-gray-800 text-xl mb-1 md:text-3xl lg:text-4xl"
      >
        Title text
      </h2>
      <span
        class="text-gray-800 text-xs leading-5 font-header md:text-base lg:text-lg"
      >
        Subtitle text
      </span>
      <a
        class="border border-solid rounded-sm cursor-pointer inline-block text-sm font-normal leading-normal mt-0 mb-0 mr-0 ml-4 pt-2 pb-2 pl-4 pr-4 relative text-center no-underline transition-colors ease-in-out duration-200 bg-accent border-accent text-accent-contrast hover:text-accent-contrast hover:bg-accent-hover hover:border-accent-hover focus:bg-accent-hover focus:border-accent-hover active:bg-accent-hover active:border-accent-hover"
        href="https://www.google.com"
        target="_blank"
      >
        This is a link
      </a>
    </div>
  </div>
</div>
`);
  });
});
