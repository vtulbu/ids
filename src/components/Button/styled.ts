import styled from "styled-components";

export const Button = styled.a`
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
  text-align: center;
  transition: background-color 0.2s ease-out;
  background-color: ${(props) => props.theme.colors.primary[300]};
  cursor: pointer;
  white-space: nowrap;

  @media (min-width: 1024px) {
    font-size: 14px;
    padding: 13px 23px;
  }

  @media (min-width: 1680px) {
    font-size: 16px;
  }

  &:hover {
    background-color: #dd3bbb;
  }
`;
