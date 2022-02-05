import styled from "styled-components";

export const Button = styled.button`
  border-radius: 0.5rem;
  font-size: 1.5rem;
  padding: 0.5rem 3rem;
  color: "#585858";
  border: solid 3px transparent;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(101deg, #00b9cd, #373737);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px #fff inset;

  &:hover {
    box-shadow: none;
    color: white;
  }
`;
