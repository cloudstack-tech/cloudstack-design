import * as React from "react";
import {render} from "@testing-library/react";

import {Space} from "../src";

describe("Space", () => {
  it("should render correctly", () => {
    const wrapper = render(<Space />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Space ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  it("should render children", () => {
    const wrapper = render(
      <Space>
        <div>Child 1</div>
        <div>Child 2</div>
      </Space>,
    );

    expect(wrapper.getByText("Child 1")).toBeInTheDocument();
    expect(wrapper.getByText("Child 2")).toBeInTheDocument();
  });

  it("should apply direction classes", () => {
    const {container, rerender} = render(<Space direction="vertical" />);

    expect(container.firstChild).toHaveClass("flex-col");

    rerender(<Space direction="horizontal" />);
    expect(container.firstChild).toHaveClass("flex-row");
  });

  it("should apply align classes", () => {
    const {container} = render(<Space align="center" />);

    expect(container.firstChild).toHaveClass("items-center");
  });

  it("should apply wrap classes", () => {
    const {container} = render(<Space wrap />);

    expect(container.firstChild).toHaveClass("flex-wrap");
  });

  it("should apply size style with preset values", () => {
    const {container} = render(<Space size="small" />);

    expect(container.firstChild).toHaveStyle({gap: "8px"});
  });

  it("should apply size style with number values", () => {
    const {container} = render(<Space size={10} />);

    expect(container.firstChild).toHaveStyle({gap: "40px"});
  });

  it("should apply different horizontal and vertical gaps", () => {
    const {container} = render(<Space size={[2, 4]} direction="horizontal" />);

    // horizontal direction uses horizontal gap (2 * 4 = 8px)
    expect(container.firstChild).toHaveStyle({gap: "8px"});
  });

  it("should apply custom className", () => {
    const {container} = render(<Space className="custom-class" />);

    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("should render as custom element", () => {
    const {container} = render(<Space as="section" />);

    expect(container.firstChild?.nodeName).toBe("SECTION");
  });

  it("should render split between children", () => {
    const wrapper = render(
      <Space split={<span>|</span>}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Space>,
    );

    // Should have 3 items + 2 separators = 5 children
    expect(wrapper.container.firstChild?.childNodes.length).toBe(5);
  });

  it("should filter invalid children", () => {
    const wrapper = render(
      <Space>
        <div>Item 1</div>
        {null}
        {undefined}
        {false}
        <div>Item 2</div>
      </Space>,
    );

    // Should only have 2 valid children
    expect(wrapper.container.firstChild?.childNodes.length).toBe(2);
  });
});

describe("Space.Compact", () => {
  it("should render correctly", () => {
    const wrapper = render(<Space.Compact />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Space.Compact ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  it("should render children", () => {
    const wrapper = render(
      <Space.Compact>
        <button>Button 1</button>
        <button>Button 2</button>
      </Space.Compact>,
    );

    expect(wrapper.getByText("Button 1")).toBeInTheDocument();
    expect(wrapper.getByText("Button 2")).toBeInTheDocument();
  });

  it("should apply direction classes", () => {
    const {container, rerender} = render(<Space.Compact direction="vertical" />);

    expect(container.firstChild).toHaveClass("flex-col");

    rerender(<Space.Compact direction="horizontal" />);
    expect(container.firstChild).toHaveClass("flex-row");
  });

  it("should apply block classes", () => {
    const {container, rerender} = render(<Space.Compact block={false} />);

    expect(container.firstChild).toHaveClass("inline-flex");

    rerender(<Space.Compact block />);
    expect(container.firstChild).toHaveClass("flex");
  });

  it("should apply gap style when size is provided", () => {
    const {container} = render(<Space.Compact size="small" />);

    expect(container.firstChild).toHaveStyle({gap: "8px"});
  });

  it("should apply compact styles to children", () => {
    const wrapper = render(
      <Space.Compact>
        <button>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
      </Space.Compact>,
    );

    const firstButton = wrapper.getByText("Button 1");
    const middleButton = wrapper.getByText("Button 2");
    const lastButton = wrapper.getByText("Button 3");

    // First button should have rounded-r-none
    expect(firstButton).toHaveClass("rounded-r-none");

    // Middle button should have rounded-none and negative margin
    expect(middleButton).toHaveClass("rounded-none");
    expect(middleButton).toHaveClass("-ml-px");

    // Last button should have rounded-l-none and negative margin
    expect(lastButton).toHaveClass("rounded-l-none");
    expect(lastButton).toHaveClass("-ml-px");
  });

  it("should apply custom className", () => {
    const {container} = render(<Space.Compact className="custom-class" />);

    expect(container.firstChild).toHaveClass("custom-class");
  });
});
