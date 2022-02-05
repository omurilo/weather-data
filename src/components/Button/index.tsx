import React, { FunctionComponent } from "react";

import * as Styled from "@components/Button/styles";

interface ButtonProps {
  handle(): void;
}

const Button: FunctionComponent<ButtonProps> = ({ children, handle }) => {
  return <Styled.Button onClick={handle}>{children}</Styled.Button>;
};

export default Button;
