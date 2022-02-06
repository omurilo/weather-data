import * as React from "react";

import { render, fireEvent, screen } from "@tests/test-utils";
import Button from "@components/Button";

const handle = jest.fn();

describe("Button", () => {
  it("should render button and dispatch handle fn", () => {
    render(<Button handle={handle} />);

    fireEvent.click(screen.getByRole("button"));

    expect(handle).toHaveBeenCalled();
  });
});
