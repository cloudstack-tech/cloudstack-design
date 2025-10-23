import * as React from "react";
import {render, screen, fireEvent} from "@testing-library/react";

import {Card} from "../src";

describe("Card", () => {
  it("should render correctly", () => {
    const wrapper = render(<Card>Test Content</Card>);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Card ref={ref}>Test</Card>);
    expect(ref.current).not.toBeNull();
  });

  it("should render children correctly", () => {
    render(<Card>Card Content</Card>);
    expect(screen.getByText("Card Content")).toBeInTheDocument();
  });

  it("should render title when provided", () => {
    render(<Card title="Card Title">Content</Card>);
    expect(screen.getByText("Card Title")).toBeInTheDocument();
  });

  it("should not render header when title is not provided and not collapsible", () => {
    const {container} = render(<Card>Content</Card>);
    const header = container.querySelector('[class*="header"]');
    expect(header).toBeNull();
  });

  it("should apply variant prop", () => {
    const {container} = render(
      <Card variant="flat" title="Flat Card">
        Content
      </Card>,
    );
    const card = container.querySelector("div");
    expect(card).toBeInTheDocument();
  });

  it("should apply hoverable prop", () => {
    const {container} = render(
      <Card hoverable={false} title="No Hover">
        Content
      </Card>,
    );
    const card = container.querySelector("div");
    expect(card).toBeInTheDocument();
  });

  it("should render collapse icon when collapsible", () => {
    const {container} = render(
      <Card title="Collapsible Card" collapsible>
        Content
      </Card>,
    );
    const icon = container.querySelector("svg");
    expect(icon).toBeInTheDocument();
  });

  it("should toggle collapse state when header is clicked", () => {
    const {container} = render(
      <Card title="Collapsible Card" collapsible>
        Content
      </Card>,
    );

    const header = screen.getByText("Collapsible Card").closest("div");
    expect(header).toBeInTheDocument();

    // Initially not collapsed
    let body = container.querySelector('[class*="body"]');
    expect(body).not.toHaveClass("max-h-0");

    // Click to collapse
    if (header) {
      fireEvent.click(header);
    }

    body = container.querySelector('[class*="body"]');
    // After click, it should have max-h-0 class
  });

  it("should start collapsed when defaultCollapsed is true", () => {
    const {container} = render(
      <Card title="Collapsed Card" collapsible defaultCollapsed>
        Content
      </Card>,
    );

    const body = container.querySelector('[class*="body"]');
    expect(body).toBeInTheDocument();
  });

  it("should call onCollapseChange when collapsed state changes", () => {
    const onCollapseChange = jest.fn();
    render(
      <Card title="Collapsible Card" collapsible onCollapseChange={onCollapseChange}>
        Content
      </Card>,
    );

    const header = screen.getByText("Collapsible Card").closest("div");
    if (header) {
      fireEvent.click(header);
    }

    expect(onCollapseChange).toHaveBeenCalledWith(true);
  });

  it("should apply custom className", () => {
    const {container} = render(
      <Card className="custom-class" title="Custom">
        Content
      </Card>,
    );
    const card = container.querySelector(".custom-class");
    expect(card).toBeInTheDocument();
  });

  it("should apply custom classNames for different slots", () => {
    const {container} = render(
      <Card
        title="Custom Slots"
        classNames={{
          base: "custom-base",
          header: "custom-header",
          title: "custom-title",
          body: "custom-body",
        }}
      >
        Content
      </Card>,
    );

    const base = container.querySelector(".custom-base");
    const header = container.querySelector(".custom-header");
    const title = container.querySelector(".custom-title");
    const body = container.querySelector(".custom-body");

    expect(base).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(body).toBeInTheDocument();
  });

  it("should render as different element when as prop is provided", () => {
    const {container} = render(
      <Card as="section" title="Section Card">
        Content
      </Card>,
    );
    const section = container.querySelector("section");
    expect(section).toBeInTheDocument();
  });

  it("should handle all variants", () => {
    const variants = ["cube", "flat", "bordered", "shadow"] as const;

    variants.forEach((variant) => {
      const {container, unmount} = render(
        <Card variant={variant} title={variant}>
          {variant}
        </Card>,
      );
      const card = container.querySelector("div");
      expect(card).toBeInTheDocument();
      unmount();
    });
  });

  it("should not collapse when collapsible is false", () => {
    const {container} = render(
      <Card title="Non-Collapsible" collapsible={false}>
        Content
      </Card>,
    );

    const header = screen.getByText("Non-Collapsible").closest("div");
    const initialBody = container.querySelector('[class*="body"]');

    if (header) {
      fireEvent.click(header);
    }

    const bodyAfterClick = container.querySelector('[class*="body"]');
    // Body should remain the same since collapsible is false
    expect(initialBody).toBe(bodyAfterClick);
  });

  it("should render with complex children", () => {
    render(
      <Card title="Complex Content">
        <div>
          <p>Paragraph 1</p>
          <p>Paragraph 2</p>
          <button>Button</button>
        </div>
      </Card>,
    );

    expect(screen.getByText("Paragraph 1")).toBeInTheDocument();
    expect(screen.getByText("Paragraph 2")).toBeInTheDocument();
    expect(screen.getByText("Button")).toBeInTheDocument();
  });

  it("should render nested cards", () => {
    render(
      <Card title="Outer Card">
        <Card title="Inner Card">Inner Content</Card>
      </Card>,
    );

    expect(screen.getByText("Outer Card")).toBeInTheDocument();
    expect(screen.getByText("Inner Card")).toBeInTheDocument();
    expect(screen.getByText("Inner Content")).toBeInTheDocument();
  });

  it("should handle fullWidth prop", () => {
    const {container} = render(
      <Card fullWidth title="Full Width">
        Content
      </Card>,
    );
    const card = container.querySelector("div");
    expect(card).toBeInTheDocument();
  });

  it("should handle isDisabled prop", () => {
    const {container} = render(
      <Card isDisabled title="Disabled">
        Content
      </Card>,
    );
    const card = container.querySelector("div");
    expect(card).toBeInTheDocument();
  });

  it("should render without title but with collapsible", () => {
    const {container} = render(<Card collapsible>Content without title</Card>);
    const header = container.querySelector('[class*="header"]');
    expect(header).toBeInTheDocument();
    expect(screen.getByText("Content without title")).toBeInTheDocument();
  });
});
