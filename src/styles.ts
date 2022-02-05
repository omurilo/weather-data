import { HTMLProps } from "react";
import styled, { css } from "styled-components";

import { getConditionColor } from "./utils";

interface ContainerProps {
  $condition?: string;
}

export const Container = styled.div<HTMLProps<HTMLDivElement> & ContainerProps>`
  ${({ $condition }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #373737;
    flex-direction: column;
    background: linear-gradient(
      180deg,
      ${getConditionColor($condition)} 0%,
      #585858 35%,
      #373737 100%
    );
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
  `}
`;
