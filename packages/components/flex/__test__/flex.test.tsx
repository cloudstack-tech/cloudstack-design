import * as React from "react";
import {render} from "@testing-library/react";

import {Flex} from "../src";

describe("Flex", () => {
  it("should render correctly", () => {
    const wrapper = render(<Flex />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Flex ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  it("should render children", () => {
    const wrapper = render(
      <Flex>
        <div>Child 1</div>
        <div>Child 2</div>
      </Flex>,
    );

    expect(wrapper.getByText("Child 1")).toBeInTheDocument();
    expect(wrapper.getByText("Child 2")).toBeInTheDocument();
  });

  it("should apply direction classes", () => {
    const {container, rerender} = render(<Flex direction="col" />);

    expect(container.firstChild).toHaveClass("flex-col");

    rerender(<Flex direction="row" />);
    expect(container.firstChild).toHaveClass("flex-row");
  });

  it("should apply justify classes", () => {
    const {container} = render(<Flex justify="center" />);

    expect(container.firstChild).toHaveClass("justify-center");
  });

  it("should apply align classes", () => {
    const {container} = render(<Flex align="center" />);

    expect(container.firstChild).toHaveClass("items-center");
  });

  it("should apply wrap classes", () => {
    const {container} = render(<Flex wrap="wrap" />);

    expect(container.firstChild).toHaveClass("flex-wrap");
  });

  it("should apply gap style", () => {
    const {container} = render(<Flex gap={4} />);

    expect(container.firstChild).toHaveStyle({gap: "16px"});
  });

  it("should apply custom className", () => {
    const {container} = render(<Flex className="custom-class" />);

    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("should render as custom element", () => {
    const {container} = render(<Flex as="section" />);

    expect(container.firstChild?.nodeName).toBe("SECTION");
  });

  it("should support inline flex", () => {
    const {container} = render(<Flex inline />);

    expect(container.firstChild).toHaveClass("inline-flex");
  });
});
