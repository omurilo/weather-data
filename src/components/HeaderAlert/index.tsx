import React from "react";

import * as Styled from "@components/HeaderAlert/styles";

export default function HeaderAlert({ message }: { message: string }) {
  return (
    <Styled.Alert>
      <strong>{message}</strong>
    </Styled.Alert>
  );
}
