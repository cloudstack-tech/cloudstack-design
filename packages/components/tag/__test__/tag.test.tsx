import * as React from "react";
import {render} from "@testing-library/react";

import { Tag } from "../src";

describe("Tag", () => {
  it("should render correctly", () => {
   const wrapper = render(<Tag />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Tag ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});