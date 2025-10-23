import * as React from "react";
import {render} from "@testing-library/react";

import { Timeline } from "../src";

describe("Timeline", () => {
  it("should render correctly", () => {
   const wrapper = render(<Timeline />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Timeline ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});