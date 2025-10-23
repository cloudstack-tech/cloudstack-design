import * as React from "react";
import {render} from "@testing-library/react";

import { Badge } from "../src";

describe("Badge", () => {
  it("should render correctly", () => {
   const wrapper = render(<Badge />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Badge ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});