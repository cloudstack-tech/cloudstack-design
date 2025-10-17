import "@testing-library/jest-dom";
import type {UserEvent} from "@testing-library/user-event";

import * as React from "react";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import {Tabs, Tab} from "../src";

describe("Tabs", () => {
  let user: UserEvent;

  beforeEach(() => {
    user = userEvent.setup();
  });

  it("should render correctly", () => {
    const wrapper = render(
      <Tabs defaultActiveKey="1">
        <Tab key="1" tabKey="1">
          Tab 1
        </Tab>
        <Tab key="2" tabKey="2">
          Tab 2
        </Tab>
      </Tabs>,
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("should render with default active tab", () => {
    render(
      <Tabs defaultActiveKey="1">
        <Tab key="1" tabKey="1">
          Tab 1
        </Tab>
        <Tab key="2" tabKey="2">
          Tab 2
        </Tab>
      </Tabs>,
    );

    const tab1 = screen.getByText("Tab 1");
    expect(tab1).toBeInTheDocument();
    expect(tab1.closest("button")).toHaveAttribute("data-active", "true");
  });

  it("should switch tabs on click", async () => {
    const onTabChange = jest.fn();

    render(
      <Tabs defaultActiveKey="1" onTabChange={onTabChange}>
        <Tab key="1" tabKey="1">
          Tab 1
        </Tab>
        <Tab key="2" tabKey="2">
          Tab 2
        </Tab>
      </Tabs>,
    );

    const tab2 = screen.getByText("Tab 2");
    await user.click(tab2);

    expect(onTabChange).toHaveBeenCalledWith("2");
  });

  it("should render with icon", () => {
    render(
      <Tabs defaultActiveKey="1">
        <Tab key="1" tabKey="1" icon={<span data-testid="icon">🏠</span>}>
          Home
        </Tab>
      </Tabs>,
    );

    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("should not switch to disabled tab", async () => {
    const onTabChange = jest.fn();

    render(
      <Tabs defaultActiveKey="1" onTabChange={onTabChange}>
        <Tab key="1" tabKey="1">
          Tab 1
        </Tab>
        <Tab key="2" tabKey="2" isDisabled>
          Tab 2
        </Tab>
      </Tabs>,
    );

    const tab2 = screen.getByText("Tab 2");
    await user.click(tab2);

    expect(onTabChange).not.toHaveBeenCalled();
  });

  it("should work in controlled mode", () => {
    const {rerender} = render(
      <Tabs value="1">
        <Tab key="1" tabKey="1">
          Tab 1
        </Tab>
        <Tab key="2" tabKey="2">
          Tab 2
        </Tab>
      </Tabs>,
    );

    const tab1 = screen.getByText("Tab 1");
    expect(tab1.closest("button")).toHaveAttribute("data-active", "true");

    rerender(
      <Tabs value="2">
        <Tab key="1" tabKey="1">
          Tab 1
        </Tab>
        <Tab key="2" tabKey="2">
          Tab 2
        </Tab>
      </Tabs>,
    );

    const tab2 = screen.getByText("Tab 2");
    expect(tab2.closest("button")).toHaveAttribute("data-active", "true");
  });
});
