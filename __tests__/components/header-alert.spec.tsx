import * as React from "react";

import { render, screen } from "@tests/test-utils";

import HeaderAlert from "@components/HeaderAlert";

const message = "Permissão para acesso à localização negada";

describe("App", () => {
  it("should render message", () => {
    render(<HeaderAlert message={message} />);

    expect(screen.getByTestId("header-alert-message")).toHaveTextContent(
      message
    );
  });

  it("shouldn't render message", () => {
    render(<HeaderAlert message="" />);
    expect(screen.getByTestId("header-alert-message").innerHTML).toEqual("");
  });
});
