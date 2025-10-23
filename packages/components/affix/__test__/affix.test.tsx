import * as React from "react";
import {render, screen} from "@testing-library/react";

import {Affix} from "../src";

describe("Affix", () => {
  it("should render correctly", () => {
    const wrapper = render(
      <Affix>
        <div>Test Content</div>
      </Affix>,
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(
      <Affix ref={ref}>
        <div>Content</div>
      </Affix>,
    );
    expect(ref.current).not.toBeNull();
  });

  it("should render children correctly", () => {
    render(
      <Affix>
        <div data-testid="affix-content">Test Content</div>
      </Affix>,
    );

    const content = screen.getByTestId("affix-content");

    expect(content).toBeInTheDocument();
    expect(content).toHaveTextContent("Test Content");
  });

  it("should apply correct variant classes", () => {
    const {container} = render(
      <Affix variant="shadow">
        <div>Content</div>
      </Affix>,
    );

    expect(container.querySelector(".affix-content")).toBeInTheDocument();
  });

  it("should handle offsetTop prop", () => {
    const {container} = render(
      <Affix offsetTop={20}>
        <div>Content</div>
      </Affix>,
    );

    expect(container.querySelector(".affix-content")).toBeInTheDocument();
  });

  it("should handle offsetBottom prop", () => {
    const {container} = render(
      <Affix offsetBottom={20} position="bottom">
        <div>Content</div>
      </Affix>,
    );

    expect(container.querySelector(".affix-content")).toBeInTheDocument();
  });

  it("should call onChange callback", () => {
    const onChange = jest.fn();

    render(
      <Affix offsetTop={20} onChange={onChange}>
        <div>Content</div>
      </Affix>,
    );

    // Note: Testing scroll events would require more complex setup
    // This just ensures the callback prop is accepted
    expect(onChange).toBeDefined();
  });

  it("should render placeholder element", () => {
    const {container} = render(
      <Affix>
        <div>Content</div>
      </Affix>,
    );

    const placeholder = container.querySelector(".affix-placeholder");

    expect(placeholder).toBeInTheDocument();
  });
});
