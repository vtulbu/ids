import styled from '@emotion/styled';

export const Button = styled.a`
  position: relative;
  padding: 12px 24px;
  font-family: Ideal Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  transition: background-color 0.2s ease-out;

  &.primary {
    background-color: #e76ece;

    &:hover {
      background-color: #ee91db;
    }
  }
`;
