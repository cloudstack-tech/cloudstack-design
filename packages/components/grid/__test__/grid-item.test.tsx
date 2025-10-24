import {render} from "@testing-library/react";

import {Grid} from "../src";

describe("Grid.Item", () => {
  it("should render correctly", () => {
    const wrapper = render(
      <Grid cols={3}>
        <Grid.Item>
          <div>Item 1</div>
        </Grid.Item>
      </Grid>,
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("should support span prop", () => {
    const {container} = render(
      <Grid cols={6}>
        <Grid.Item span={2}>
          <div>Item with span</div>
        </Grid.Item>
      </Grid>,
    );

    const item = container.querySelector(".col-span-2");

    expect(item).toBeInTheDocument();
  });

  it("should support rowSpan prop", () => {
    const {container} = render(
      <Grid cols={3}>
        <Grid.Item rowSpan={2}>
          <div>Item with rowSpan</div>
        </Grid.Item>
      </Grid>,
    );

    const item = container.querySelector(".row-span-2");

    expect(item).toBeInTheDocument();
  });

  it("should support offset prop", () => {
    const {container} = render(
      <Grid cols={6}>
        <Grid.Item offset={2}>
          <div>Item with offset</div>
        </Grid.Item>
      </Grid>,
    );

    const item = container.querySelector("div[style*='grid-column-start']");

    expect(item).toBeInTheDocument();
  });

  it("should support negative offset", () => {
    const {container} = render(
      <Grid cols={6}>
        <Grid.Item offset={-2}>
          <div>Item with negative offset</div>
        </Grid.Item>
      </Grid>,
    );

    const item = container.querySelector("div[style*='grid-column-start']");

    expect(item).toBeInTheDocument();
  });

  it("should support colStart and colEnd", () => {
    const {container} = render(
      <Grid cols={6}>
        <Grid.Item colStart={2} colEnd={5}>
          <div>Item with column positioning</div>
        </Grid.Item>
      </Grid>,
    );

    const item = container.querySelector("div[style*='grid-column-start']");

    expect(item).toBeInTheDocument();
  });

  it("should support rowStart and rowEnd", () => {
    const {container} = render(
      <Grid cols={3} rows={3}>
        <Grid.Item rowStart={1} rowEnd={3}>
          <div>Item with row positioning</div>
        </Grid.Item>
      </Grid>,
    );

    const item = container.querySelector("div[style*='grid-row-start']");

    expect(item).toBeInTheDocument();
  });

  it("should support custom className", () => {
    const {container} = render(
      <Grid cols={3}>
        <Grid.Item className="custom-class">
          <div>Custom item</div>
        </Grid.Item>
      </Grid>,
    );

    const item = container.querySelector(".custom-class");

    expect(item).toBeInTheDocument();
  });

  it("should support as prop", () => {
    const {container} = render(
      <Grid cols={3}>
        <Grid.Item as="section">
          <div>Item as section</div>
        </Grid.Item>
      </Grid>,
    );

    const item = container.querySelector("section");

    expect(item).toBeInTheDocument();
  });

  it("should combine span and offset", () => {
    const {container} = render(
      <Grid cols={12}>
        <Grid.Item span={6} offset={3}>
          <div>Centered item</div>
        </Grid.Item>
      </Grid>,
    );

    const item = container.querySelector(".col-span-6");

    expect(item).toBeInTheDocument();
    expect(item).toHaveStyle({gridColumnStart: "4"});
  });
});
