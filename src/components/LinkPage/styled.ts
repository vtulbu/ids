import styled from "styled-components";

interface Props {
  color?: string;
}

export const Link = styled.a<Props>`
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 1px;
  color: ${(props) => props.color};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  column-gap: 20px;

  @media (min-width: 1680px) {
    letter-spacing: 2px;
    font-size: 16px;
    line-height: 24px;
  }

  & > svg {
    transition: transform 0.3s linear;
    width: 30px;
    height: 30px;
  }

  &:hover {
    & > svg {
      transform: translate(12px, 0);
    }
  }
`;
