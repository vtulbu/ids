import styled from "styled-components";
import { fluidValue } from "@/utils/Mixins/fluidValue";

interface Props {
  visible: boolean;
}

export const Container = styled.div<Props>`
  position: absolute;
  min-height: calc(100vh - 54px);
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  left: 0;
  right: 0;
  bottom: 0;
  top: ${(props) => (props.visible ? "54px" : "-100vh")};
  padding: 30px 12px;
  opacity: ${(props) => (props.visible ? "1" : "0")};
  transition: all 600ms cubic-bezier(0.4, 0, 0.49, 1);
  background-color: #fff;
  z-index: -1;

  @media (min-width: 768px) {
    padding: 50px 36px;
    row-gap: 50px;
    top: ${(props) => (props.visible ? "66px" : "-100vh")};
    min-height: calc(100vh - 66px);
  }

  @media (min-width: 1024px) {
    position: static;
    z-index: 1;
    flex-direction: row;
    align-items: center;
    padding: 0;
    opacity: 1;
    min-height: 0;
  }
`;

export const Nav = styled.nav`
  background-color: #fff;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    column-gap: 50px;
    padding-right: 40px;
  }

  ${() => fluidValue("padding-right", 187, 56, 3840, 1200)}
  ${() => fluidValue("column-gap", 120, 56, 3840, 1200)}
`;

export const Link = styled.a`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;
  color: #000;
  transition: color 0.25s ease-in-out;
  text-decoration: none;
  padding: 18px 0;

  @media (min-width: 768px) {
    font-size: 28px;
    font-weight: 400;
  }

  @media (min-width: 1024px) {
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0;
    line-height: 24px;
  }

  @media (min-width: 1680px) {
    font-size: 16px;
  }

  &:hover {
    color: #e76ece;
  }

  & + a {
    border-top: 1px solid #0069a5;

    @media (min-width: 1024px) {
      border-top: none;
    }
  }

  &:last-of-type {
    @media (min-width: 1024px) {
      display: none;
    }
  }
`;
