import * as React from "react";

import * as Styled from "@components/Button/styles";

interface ButtonProps {
  handle(): void;
}

const Button: React.FunctionComponent<ButtonProps> = ({ children, handle }) => {
  return <Styled.Button onClick={handle}>{children}</Styled.Button>;
};

export default Button;
