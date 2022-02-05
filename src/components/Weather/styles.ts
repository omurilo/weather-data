import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  color: #585858;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 1rem;
  border-radius: 0.25rem;
  gap: 0.5rem;

  & .icon {
    display: flex;
    & > span {
      font-size: 2.5rem;
    }
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: bold;
`;

export const SubTitle = styled.h6`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 1rem;
  text-transform: capitalize;

  & > svg {
    margin-top: -0.15rem;
    margin-right: 0.25rem;
  }
`;

export const List = styled.ul`
  list-style: none;
  width: 100%;
  margin: 1rem 0;
`;

export const Row = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem;

  &:not(:last-of-type) {
    border-bottom: 1px solid #555555;
  }

  & > div {
    display: flex;
    align-items: center;

    & > span {
      display: flex;
      align-items: center;
    }
  }
`;
