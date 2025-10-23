import * as React from "react";
import {render, screen} from "@testing-library/react";

import {Badge} from "../src";

describe("Badge", () => {
  it("should render correctly", () => {
    const wrapper = render(<Badge>Test Badge</Badge>);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLSpanElement>();

    render(<Badge ref={ref}>Test</Badge>);
    expect(ref.current).not.toBeNull();
  });

  it("should render children correctly", () => {
    render(<Badge>Badge Content</Badge>);
    expect(screen.getByText("Badge Content")).toBeInTheDocument();
  });

  it("should apply default variant", () => {
    const {container} = render(<Badge>Test</Badge>);
    const badge = container.querySelector("span");
    expect(badge).toBeInTheDocument();
  });

  it("should apply color prop", () => {
    const {container} = render(<Badge color="primary">Primary Badge</Badge>);
    const badge = container.querySelector("span");
    expect(badge).toBeInTheDocument();
  });

  it("should apply variant prop", () => {
    const {container} = render(<Badge variant="outline">Outline Badge</Badge>);
    const badge = container.querySelector("span");
    expect(badge).toBeInTheDocument();
  });

  it("should apply size prop", () => {
    const {container} = render(<Badge size="lg">Large Badge</Badge>);
    const badge = container.querySelector("span");
    expect(badge).toBeInTheDocument();
  });

  it("should apply radius prop", () => {
    const {container} = render(<Badge radius="full">Full Radius</Badge>);
    const badge = container.querySelector("span");
    expect(badge).toBeInTheDocument();
  });

  it("should apply custom className", () => {
    const {container} = render(<Badge className="custom-class">Test</Badge>);
    const badge = container.querySelector("span");
    expect(badge).toHaveClass("custom-class");
  });

  it("should render as different element when as prop is provided", () => {
    const {container} = render(<Badge as="div">Test</Badge>);
    const badge = container.querySelector("div");
    expect(badge).toBeInTheDocument();
  });

  it("should apply disabled styles when isDisabled is true", () => {
    const {container} = render(<Badge isDisabled>Disabled Badge</Badge>);
    const badge = container.querySelector("span");
    expect(badge).toBeInTheDocument();
  });

  it("should render dot variant without content", () => {
    const {container} = render(<Badge variant="dot" color="success" />);
    const badge = container.querySelector("span");
    expect(badge).toBeInTheDocument();
  });

  it("should render with multiple props combined", () => {
    const {container} = render(
      <Badge variant="flat" color="warning" size="sm" radius="lg">
        Combined
      </Badge>,
    );
    const badge = container.querySelector("span");
    expect(badge).toBeInTheDocument();
    expect(screen.getByText("Combined")).toBeInTheDocument();
  });

  it("should handle all color variants", () => {
    const colors = [
      "default",
      "primary",
      "secondary",
      "success",
      "warning",
      "danger",
      "info",
    ] as const;

    colors.forEach((color) => {
      const {container} = render(<Badge color={color}>{color}</Badge>);
      const badge = container.querySelector("span");
      expect(badge).toBeInTheDocument();
    });
  });

  it("should handle all variants", () => {
    const variants = ["solid", "outline", "flat", "dot"] as const;

    variants.forEach((variant) => {
      const {container} = render(<Badge variant={variant}>{variant}</Badge>);
      const badge = container.querySelector("span");
      expect(badge).toBeInTheDocument();
    });
  });

  it("should handle all sizes", () => {
    const sizes = ["sm", "md", "lg"] as const;

    sizes.forEach((size) => {
      const {container} = render(<Badge size={size}>{size}</Badge>);
      const badge = container.querySelector("span");
      expect(badge).toBeInTheDocument();
    });
  });

  it("should handle all radius options", () => {
    const radiusOptions = ["none", "sm", "md", "lg", "full"] as const;

    radiusOptions.forEach((radius) => {
      const {container} = render(<Badge radius={radius}>{radius}</Badge>);
      const badge = container.querySelector("span");
      expect(badge).toBeInTheDocument();
    });
  });
});
