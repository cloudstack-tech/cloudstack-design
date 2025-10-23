import * as React from "react";
import {render} from "@testing-library/react";

import { Steps } from "../src";

describe("Steps", () => {
  it("should render correctly", () => {
   const wrapper = render(<Steps />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Steps ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});