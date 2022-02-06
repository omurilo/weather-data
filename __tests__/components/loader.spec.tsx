import * as React from "react";

import { render, screen } from "@tests/test-utils";
import Loader from "@components/Loader";

describe("Loader", () => {
  it("should render loader animation", () => {
    render(<Loader />);

    expect(screen.getByRole("button")).toHaveAttribute(
      "aria-label",
      "animation"
    );
  });
});
