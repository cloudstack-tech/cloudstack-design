import * as React from "react";
import {render} from "@testing-library/react";

import { Card } from "../src";

describe("Card", () => {
  it("should render correctly", () => {
   const wrapper = render(<Card />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Card ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});