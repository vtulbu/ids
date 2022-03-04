import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 8px 20px 7px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;

  @media only screen and (min-width: 768px) {
    padding: 10px 30px 10px 36px;
  }

  @media only screen and (min-width: 1680px) {
    padding: 21px 60px 21px 47px;
  }
`;

export const LogoBox = styled.div`
  width: 59px;
  height: 38px;

  @media only screen and (min-width: 768px) {
    width: 80px;
    height: 52px;
  }

  @media only screen and (min-width: 1680px) {
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

  ::after,
  ::before {
    position: absolute;
    content: "";
    height: 18px;
    width: 3px;
    background-color: #323232;
    border-radius: 2px 2px;
  }

  ::after {
    transform: rotate(-45deg);
  }

  ::before {
    transform: rotate(45deg);
  }

  ::after:hover,
  ::before:hover {
    background-color: red;
  }

  :hover::after,
  :hover::before {
    background-color: #595959;
  }

  @media only screen and (min-width: 1680px) {
    display: none;
  }
`;

export const NavigationMenu = styled.nav`
  display: none;

  @media only screen and (min-width: 1680px) {
    display: flex;
    gap: 211px;
  }
`;

export const UnorderedList = styled.ul`
  display: flex;
  gap: 120px;
`;

export const ListItem = styled.li`
  text-decoration: none;
  list-style: none;
  transition: color 200ms cubic-bezier(0.4, 0, 0.49, 1);

  :hover {
    color: #e76ece;
  }
`;

export const AnchorLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
`;

export const DownloadButton = styled.button`
  display: none;
  background-color: #e76ece;
  padding: 12px 24px;
  border: none;
  color: #ffffff;
  text-transform: uppercase;
  font-size: 16px;
  transition: background-color 200ms cubic-bezier(0.4, 0, 0.49, 1);

  :hover {
    background-color: #ee91db;
    cursor: pointer;
  }

  @media only screen and (min-width: 1680px) {
    display: block;
  }
`;
