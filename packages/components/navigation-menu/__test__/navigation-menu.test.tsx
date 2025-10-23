import * as React from "react";
import {render} from "@testing-library/react";

import { NavigationMenu } from "../src";

describe("NavigationMenu", () => {
  it("should render correctly", () => {
   const wrapper = render(<NavigationMenu />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<NavigationMenu ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});