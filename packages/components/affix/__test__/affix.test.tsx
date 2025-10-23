import * as React from "react";
import {render} from "@testing-library/react";

import { Affix } from "../src";

describe("Affix", () => {
  it("should render correctly", () => {
   const wrapper = render(<Affix />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Affix ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});