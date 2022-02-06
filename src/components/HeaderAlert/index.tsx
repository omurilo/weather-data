import * as React from "react";

import * as Styled from "@components/HeaderAlert/styles";

export default function HeaderAlert({ message }: { message: string }) {
  return (
    <Styled.Alert>
      <strong data-testid="header-alert-message">{message}</strong>
    </Styled.Alert>
  );
}
