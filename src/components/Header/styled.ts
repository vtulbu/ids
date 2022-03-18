import styled from "styled-components";
import Headroom from "react-headroom";

export const Header = styled.header``;

export const StyledHeadroom = styled(Headroom)`
  .headroom {
    top: 0;
    left: 0;
    right: 0;
    z-index: 1200;
    background-color: ${(props) => props.theme.colors.white};
    border-bottom: 1px solid ${(props) => props.theme.colors.gray[50]};
  }
  .headroom--unfixed {
    position: relative;
    transform: translateY(0);
  }
  .headroom--scrolled {
    transition: transform 400ms cubic-bezier(0.4, 0, 0.49, 1);
  }
  .headroom--unpinned {
    position: fixed;
    transform: translateY(-100%);
  }
  .headroom--pinned {
    position: fixed;
    transform: translateY(0%);
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  justify-content: space-between;
  align-items: center;
  max-width: 1680px;
  padding: 10px 12px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 16px 36px;
  }

  @media (min-width: 1024px) {
    padding: 6px 36px;
  }

  @media (min-width: 1680px) {
    padding: 10px 60px;
  }

  @media (min-width: 1024px) {
    padding: 21px 47px;
  }
`;

export const Logo = styled.a`
  position: relative;
  width: 59px;
  height: 38px;
  @media (min-width: 768px) {
    width: 80px;
    height: 52px;
  }
  @media (min-width: 1024px) {
    width: 105px;
    height: 68px;
  }
`;
