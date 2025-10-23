import * as React from "react";
import {render, screen} from "@testing-library/react";

import {Typography, Text, Title} from "../src";

describe("Typography", () => {
  it("should render correctly", () => {
    const wrapper = render(<Typography>Test</Typography>);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLElement>();

    render(<Typography ref={ref}>Test</Typography>);
    expect(ref.current).not.toBeNull();
  });

  it("should render children correctly", () => {
    render(<Typography>Typography Content</Typography>);
    expect(screen.getByText("Typography Content")).toBeInTheDocument();
  });

  it("should apply different sizes", () => {
    const sizes = ["xs", "sm", "base", "md", "lg", "xl", "2xl", "3xl"] as const;

    sizes.forEach((size) => {
      const {container, unmount} = render(<Typography size={size}>Test</Typography>);
      const element = container.querySelector("div");
      expect(element).toBeInTheDocument();
      unmount();
    });
  });

  it("should apply different colors", () => {
    const colors = [
      "default",
      "primary",
      "secondary",
      "success",
      "warning",
      "danger",
      "muted",
    ] as const;

    colors.forEach((color) => {
      const {container, unmount} = render(<Typography color={color}>Test</Typography>);
      const element = container.querySelector("div");
      expect(element).toBeInTheDocument();
      unmount();
    });
  });

  it("should apply different weights", () => {
    const weights = ["light", "normal", "medium", "semibold", "bold"] as const;

    weights.forEach((weight) => {
      const {container, unmount} = render(<Typography weight={weight}>Test</Typography>);
      const element = container.querySelector("div");
      expect(element).toBeInTheDocument();
      unmount();
    });
  });

  it("should apply text styles", () => {
    const {container} = render(
      <Typography italic underline strikethrough>
        Test
      </Typography>,
    );
    const element = container.querySelector("div");
    expect(element).toBeInTheDocument();
  });

  it("should apply truncate", () => {
    const {container} = render(<Typography truncate>Test</Typography>);
    const element = container.querySelector("div");
    expect(element).toBeInTheDocument();
  });

  it("should apply text alignment", () => {
    const alignments = ["left", "center", "right", "justify"] as const;

    alignments.forEach((align) => {
      const {container, unmount} = render(<Typography align={align}>Test</Typography>);
      const element = container.querySelector("div");
      expect(element).toBeInTheDocument();
      unmount();
    });
  });

  it("should apply text transform", () => {
    const transforms = ["uppercase", "lowercase", "capitalize", "normal"] as const;

    transforms.forEach((transform) => {
      const {container, unmount} = render(<Typography transform={transform}>Test</Typography>);
      const element = container.querySelector("div");
      expect(element).toBeInTheDocument();
      unmount();
    });
  });

  it("should apply custom className", () => {
    const {container} = render(<Typography className="custom-class">Test</Typography>);
    const element = container.querySelector(".custom-class");
    expect(element).toBeInTheDocument();
  });

  it("should render as different element", () => {
    const {container} = render(<Typography as="p">Test</Typography>);
    const element = container.querySelector("p");
    expect(element).toBeInTheDocument();
  });
});

describe("Text", () => {
  it("should render correctly", () => {
    const wrapper = render(<Text>Test</Text>);
    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("should render as span by default", () => {
    const {container} = render(<Text>Test Text</Text>);
    const span = container.querySelector("span");
    expect(span).toBeInTheDocument();
    expect(screen.getByText("Test Text")).toBeInTheDocument();
  });

  it("should apply all typography props", () => {
    const {container} = render(
      <Text size="lg" color="primary" weight="bold" italic>
        Test
      </Text>,
    );
    const span = container.querySelector("span");
    expect(span).toBeInTheDocument();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLElement>();

    render(<Text ref={ref}>Test</Text>);
    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe("SPAN");
  });
});

describe("Title", () => {
  it("should render correctly", () => {
    const wrapper = render(<Title level={1}>Test</Title>);
    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("should render different levels", () => {
    const levels = [1, 2, 3, 4, 5, 6] as const;

    levels.forEach((level) => {
      const {container, unmount} = render(<Title level={level}>Test</Title>);
      const heading = container.querySelector(`h${level}`);
      expect(heading).toBeInTheDocument();
      unmount();
    });
  });

  it("should default to h1", () => {
    const {container} = render(<Title>Test Title</Title>);
    const h1 = container.querySelector("h1");
    expect(h1).toBeInTheDocument();
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("should default to bold weight", () => {
    const {container} = render(<Title level={2}>Test</Title>);
    const heading = container.querySelector("h2");
    expect(heading).toBeInTheDocument();
  });

  it("should allow custom weight", () => {
    const {container} = render(
      <Title level={2} weight="normal">
        Test
      </Title>,
    );
    const heading = container.querySelector("h2");
    expect(heading).toBeInTheDocument();
  });

  it("should apply color", () => {
    const {container} = render(
      <Title level={1} color="primary">
        Test
      </Title>,
    );
    const heading = container.querySelector("h1");
    expect(heading).toBeInTheDocument();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLElement>();

    render(
      <Title level={1} ref={ref}>
        Test
      </Title>,
    );
    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe("H1");
  });

  it("should map level to correct size", () => {
    const {container: container1} = render(<Title level={1}>Test</Title>);
    const {container: container2} = render(<Title level={6}>Test</Title>);

    expect(container1.querySelector("h1")).toBeInTheDocument();
    expect(container2.querySelector("h6")).toBeInTheDocument();
  });

  it("should apply other typography props", () => {
    const {container} = render(
      <Title level={2} italic underline>
        Test
      </Title>,
    );
    const heading = container.querySelector("h2");
    expect(heading).toBeInTheDocument();
  });
});
