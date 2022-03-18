import styled from "styled-components";

interface Props {
  clickBtn: boolean;
}

export const Container = styled.div`
  margin-bottom: 50px;
  padding: 12px 3.75vw;
  align-self: center;

  @media (min-width: 768px) {
    display: flex;
    column-gap: 35px;
    padding: 0 99px;
    width: 800px;
  }

  @media (min-width: 1200px) {
    width: 900px;
  }

  @media (min-width: 1680px) {
    margin-bottom: 90px;
    width: 1200px;
    margin-left: 105px;
  }
`;

export const Button = styled.button<Props>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: none;
  border-radius: 50%;
  background-color: #f27f27;
  cursor: pointer;
  min-width: 30px;
  height: 30px;
  margin: 0 0 20px;

  @media (min-width: 768px) {
    min-width: 35px;
    height: 35px;
  }

  @media (min-width: 1680px) {
    min-width: 40px;
    height: 40px;
  }

  ::before {
    content: "";
    position: absolute;
    width: 16px;
    height: 2px;
    background-color: ${(props) => props.theme.colors.white};

    @media (min-width: 768px) {
      width: 18px;
    }
  }

  ::after {
    content: "";
    position: absolute;
    width: 2px;
    height: 16px;
    background-color: ${(props) => props.theme.colors.white};
    transition: transform 0.2s linear;
    transform: ${(props) =>
      props.clickBtn ? "rotate(90deg)" : "rotate(0deg)"};

    @media (min-width: 768px) {
      height: 18px;
    }

    @media (min-width: 1680px) {
      width: 3px;
    }
  }
`;

export const Paragraphe = styled.p<Props>`
  font-size: 18px;
  font-style: italic;
  font-weight: 400;
  line-height: 27px;
  overflow: ${(props) => (props.clickBtn ? "visible" : "hidden")};
  line-clamp: ${(props) => (props.clickBtn ? "unset" : "2")};
  -webkit-line-clamp: ${(props) => (props.clickBtn ? "unset" : "2")};
  -webkit-box-orient: vertical;
  display: -webkit-box;

  @media (min-width: 768px) {
    line-clamp: ${(props) => (props.clickBtn ? "unset" : "3")};
    -webkit-line-clamp: ${(props) => (props.clickBtn ? "unset" : "3")};
  }

  @media (min-width: 1680px) {
    font-size: 22px;
    font-weight: 400;
    line-height: 33px;
    font-family: Helvetica;
    font-style: normal;
  }
`;
