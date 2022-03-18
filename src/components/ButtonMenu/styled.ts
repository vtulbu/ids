import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 35px;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;

  @media (min-width: 768px) {
    height: 40px;
    width: 40px;
    margin-right: -12px;
  }

  @media (min-width: 1024px) {
    display: none;
  }

  &.active .line {
    transition: stroke-dasharray 500ms, stroke-dashoffset 500ms, transform 500ms;
  }

  &.active .line1 {
    transform: scale(0, 1);
    transition: transform 500ms 100ms;
  }

  &.active .line {
    transition: stroke-dasharray 500ms, stroke-dashoffset 500ms, transform 500ms;
  }
  &.active .line1 {
    transform: scale(0, 1);
    transition: transform 500ms 100ms;
  }
  &.active .line2 {
    stroke-dasharray: 5px 200;
    stroke-dashoffset: -164px;
  }
  &.active .line3 {
    stroke-dasharray: 5px 179;
    stroke-dashoffset: -142px;
  }
`;

export const SVG = styled.svg`
  height: inherit;
  width: inherit;
  position: absolute;

  .line {
    fill: none;
    stroke: black;
    stroke-width: 5px;
    stroke-linecap: round;
    stroke-linejoin: round;
    transform-origin: 50%;
    transition: stroke-dasharray 500ms 200ms, stroke-dashoffset 500ms 200ms,
      transform 500ms 200ms;
  }

  .line2 {
    stroke-dasharray: 40 200;
    stroke-dashoffset: 0px;
  }
  .line3 {
    stroke-dasharray: 40 179;
    stroke-dashoffset: 0px;
  }

  &.x .line {
    stroke-width: 5px;
  }

  &.x {
    transform: scale(0);
    transition: transform 400ms cubic-bezier(0.4, 0, 0.49, 1);
  }

  .active &.x {
    transform: scale(1);
    transition: transform 400ms 350ms;
  }
`;
