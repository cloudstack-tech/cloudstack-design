import * as React from "react";
import {render} from "@testing-library/react";

import {Grid} from "../src";

describe("Grid", () => {
  it("should render correctly", () => {
    const wrapper = render(<Grid />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Grid ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  it("should render children", () => {
    const wrapper = render(
      <Grid>
        <div>Child 1</div>
        <div>Child 2</div>
      </Grid>,
    );

    expect(wrapper.getByText("Child 1")).toBeInTheDocument();
    expect(wrapper.getByText("Child 2")).toBeInTheDocument();
  });

  it("should apply cols classes", () => {
    const {container, rerender} = render(<Grid cols={3} />);

    expect(container.firstChild).toHaveClass("grid-cols-3");

    rerender(<Grid cols={6} />);
    expect(container.firstChild).toHaveClass("grid-cols-6");
  });

  it("should apply rows classes", () => {
    const {container} = render(<Grid rows={2} />);

    expect(container.firstChild).toHaveClass("grid-rows-2");
  });

  it("should apply flow classes", () => {
    const {container} = render(<Grid flow="col" />);

    expect(container.firstChild).toHaveClass("grid-flow-col");
  });

  it("should apply gap style with single value", () => {
    const {container} = render(<Grid gap={4} />);

    expect(container.firstChild).toHaveStyle({gap: "16px"});
  });

  it("should apply gap style with array value", () => {
    const {container} = render(<Grid gap={[4, 8]} />);

    expect(container.firstChild).toHaveStyle({
      rowGap: "16px",
      columnGap: "32px",
    });
  });

  it("should apply custom className", () => {
    const {container} = render(<Grid className="custom-class" />);

    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("should render as custom element", () => {
    const {container} = render(<Grid as="section" />);

    expect(container.firstChild?.nodeName).toBe("SECTION");
  });

  it("should combine cols, rows and gap", () => {
    const {container} = render(<Grid cols={4} rows={3} gap={4} />);

    expect(container.firstChild).toHaveClass("grid-cols-4");
    expect(container.firstChild).toHaveClass("grid-rows-3");
    expect(container.firstChild).toHaveStyle({gap: "16px"});
  });

  it("should apply base grid class", () => {
    const {container} = render(<Grid />);

    expect(container.firstChild).toHaveClass("grid");
  });
});
