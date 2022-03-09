import styled from 'styled-components';
import { fluidValue } from '../../utils/Mixins/fluidValues';

export const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  border-bottom: 1px solid #f0f0f0;
  background-color: #fff;
  z-index: 1020;
`;

export const Container = styled.header`
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  align-items: center;
  max-width: 1680px;
  padding: 10px 60px;
  margin: 0 auto;
`;

export const Logo = styled.a`
  position: relative;
  width: 59px;
  height: 38px;

  @media (min-width: 768px) {
    width: 80px;
    height: 52px;
  }

  @media (min-width: 1680px) {
    width: 105px;
    height: 68px;
  }
`;

export const ExitButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before,
  &::after {
    position: absolute;
    content: '';
    height: 18px;
    width: 3px;
    background-color: #323232;
    border-radius: 2px 2px;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }

  &:hover {
    &::before,
    &::after {
      background-color: #595959;
    }
  }

  @media only screen and (min-width: 1680px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  row-gap: 20px;
  padding-right: 187px;
  column-gap: 120px;
  ${() => fluidValue('padding-right', 187, 56, 1680, 1200)}
  ${() => fluidValue('column-gap', 120, 56, 1680, 1200)}

  @media (max-width: 1199px) {
    gap: 20px 54px;
    justify-content: center;
    padding-right: 0;
  }

  @media (max-width: 1023px) {
    display: grid;
    justify-content: stretch;
    gap: unset;
    margin-bottom: 50px;
    padding-right: 0;
    opacity: 0;
  }

  @media (max-width: 767px) {
    margin-bottom: 30px;
  }
`;

export const Link = styled.a`
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 500;
  line-height: 1.5;
  color: #000;
  transition: color 0.25s ease-in-out;
  text-decoration: none;

  @media (max-width: 1199px) {
    font-size: 14px;
    line-height: 1.5;
  }

  &.show-in-mobile-menu {
    display: none;
  }

  @media (max-width: 1023px) {
    padding: 20px 0;
    font-size: 28px;
    line-height: 36px;
    text-transform: unset;
    font-weight: 300;

    + a {
      border-top: 1px solid #e76ece;
    }

    &.show-in-mobile-menu {
      display: unset;
    }
  }

  @media (max-width: 767px) {
    font-size: 20px;
    line-height: 1.2;
    font-weight: 400;
  }

  @media (hover: hover) {
    &:hover {
      color: #e76ece;
    }
  }

  &.active,
  &:active {
    color: #e76ece;
  }
`;
