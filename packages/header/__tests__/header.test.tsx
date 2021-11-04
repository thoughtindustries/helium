import React from "react";
import { render } from "@testing-library/react";
import { Header, HeaderProps } from "../src";

const setupProps = (
  alternateTitleDisplay: boolean = false,
  linkUrl?: string,
  linkText?: string
): HeaderProps => ({
  title: "Header title",
  alternateTitleDisplay,
  linkUrl,
  linkText,
});

describe("@thoughtindustries/header", () => {
  it("should render", () => {
    const props: HeaderProps = setupProps();
    const { container } = render(<Header {...props} />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <h2
          class="text-2xl text-center text-gray-700 mb-4 font-header"
        >
          Header title
        </h2>
      </div>
    `);
  });

  it("should render alternate header", () => {
    const props: HeaderProps = setupProps(true);
    const { container } = render(<Header {...props} />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div>
          <h3>
            Header title
          </h3>
        </div>
        <hr
          class="relative my-4"
        />
      </div>
    `);
  });

  it("should render alternate header with link", () => {
    const props: HeaderProps = setupProps(true, "test", "/");
    const { container } = render(<Header {...props} />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="pr-8 max-w-3/4"
        >
          <h3>
            Header title
          </h3>
        </div>
        <a
          class="text-gray-700 absolute text-xs border border-solid border-gray-100 text-center px-1 py-0.5 max-w-1/4 right-4 top-2"
          href="test"
        >
          /
        </a>
        <hr
          class="relative my-4"
        />
      </div>
    `);
  });
});
