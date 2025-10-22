import * as React from "react";
import {render} from "@testing-library/react";

import {Stack, HStack, VStack} from "../src";

describe("Stack", () => {
  it("should render correctly", () => {
    const wrapper = render(<Stack />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Stack ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  it("should render children", () => {
    const wrapper = render(
      <Stack>
        <div>Child 1</div>
        <div>Child 2</div>
      </Stack>,
    );

    expect(wrapper.getByText("Child 1")).toBeInTheDocument();
    expect(wrapper.getByText("Child 2")).toBeInTheDocument();
  });

  it("should apply direction classes", () => {
    const {container, rerender} = render(<Stack direction="vertical" />);

    expect(container.firstChild).toHaveClass("flex-col");

    rerender(<Stack direction="horizontal" />);
    expect(container.firstChild).toHaveClass("flex-row");
  });

  it("should apply align classes", () => {
    const {container} = render(<Stack align="center" />);

    expect(container.firstChild).toHaveClass("items-center");
  });

  it("should apply justify classes", () => {
    const {container} = render(<Stack justify="between" />);

    expect(container.firstChild).toHaveClass("justify-between");
  });

  it("should apply wrap classes", () => {
    const {container} = render(<Stack wrap />);

    expect(container.firstChild).toHaveClass("flex-wrap");
  });

  it("should apply spacing style with preset values", () => {
    const {container} = render(<Stack spacing="small" />);

    expect(container.firstChild).toHaveStyle({gap: "8px"});
  });

  it("should apply spacing style with number values", () => {
    const {container} = render(<Stack spacing={10} />);

    expect(container.firstChild).toHaveStyle({gap: "40px"});
  });

  it("should apply custom className", () => {
    const {container} = render(<Stack className="custom-class" />);

    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("should render as custom element", () => {
    const {container} = render(<Stack as="section" />);

    expect(container.firstChild?.nodeName).toBe("SECTION");
  });

  it("should render divider between children", () => {
    const wrapper = render(
      <Stack divider={<hr data-testid="divider" />}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Stack>,
    );

    // Should have 3 items + 2 dividers = 5 children
    expect(wrapper.container.firstChild?.childNodes.length).toBe(5);
    expect(wrapper.getAllByTestId("divider").length).toBe(2);
  });

  it("should filter invalid children", () => {
    const wrapper = render(
      <Stack>
        <div>Item 1</div>
        {null}
        {undefined}
        {false}
        <div>Item 2</div>
      </Stack>,
    );

    // Should only have 2 valid children
    expect(wrapper.container.firstChild?.childNodes.length).toBe(2);
  });

  it("should return null for empty children", () => {
    const {container} = render(<Stack>{null}</Stack>);

    expect(container.firstChild?.childNodes.length).toBe(0);
  });
});

describe("HStack", () => {
  it("should render correctly", () => {
    const wrapper = render(<HStack />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<HStack ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  it("should apply horizontal direction by default", () => {
    const {container} = render(<HStack />);

    expect(container.firstChild).toHaveClass("flex-row");
  });

  it("should render children", () => {
    const wrapper = render(
      <HStack>
        <div>Child 1</div>
        <div>Child 2</div>
      </HStack>,
    );

    expect(wrapper.getByText("Child 1")).toBeInTheDocument();
    expect(wrapper.getByText("Child 2")).toBeInTheDocument();
  });

  it("should apply spacing", () => {
    const {container} = render(<HStack spacing="medium" />);

    expect(container.firstChild).toHaveStyle({gap: "16px"});
  });
});

describe("VStack", () => {
  it("should render correctly", () => {
    const wrapper = render(<VStack />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<VStack ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  it("should apply vertical direction by default", () => {
    const {container} = render(<VStack />);

    expect(container.firstChild).toHaveClass("flex-col");
  });

  it("should render children", () => {
    const wrapper = render(
      <VStack>
        <div>Child 1</div>
        <div>Child 2</div>
      </VStack>,
    );

    expect(wrapper.getByText("Child 1")).toBeInTheDocument();
    expect(wrapper.getByText("Child 2")).toBeInTheDocument();
  });

  it("should apply spacing", () => {
    const {container} = render(<VStack spacing="large" />);

    expect(container.firstChild).toHaveStyle({gap: "24px"});
  });
});

describe("Stack with variants", () => {
  it("should support Stack.H", () => {
    const {container} = render(<Stack.H />);

    expect(container.firstChild).toHaveClass("flex-row");
  });

  it("should support Stack.V", () => {
    const {container} = render(<Stack.V />);

    expect(container.firstChild).toHaveClass("flex-col");
  });

  it("should support Stack.Horizontal", () => {
    const {container} = render(<Stack.Horizontal />);

    expect(container.firstChild).toHaveClass("flex-row");
  });

  it("should support Stack.Vertical", () => {
    const {container} = render(<Stack.Vertical />);

    expect(container.firstChild).toHaveClass("flex-col");
  });
});
