import * as React from "react";
import {render} from "@testing-library/react";

import { Descriptions } from "../src";

describe("Descriptions", () => {
  it("should render correctly", () => {
   const wrapper = render(<Descriptions />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Descriptions ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});