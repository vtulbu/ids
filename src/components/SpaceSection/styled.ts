import { fluidValue } from "@/utils/Mixins/fluidValue";
import styled from "styled-components";

interface Props {
  animation: boolean;
}

export const Section = styled.section`
  padding: 35px 3.75vw 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    padding: 70px 36px 0;
    max-width: 768px;
  }

  ${fluidValue("max-width", 1050, 768, 1679, 1200)}

  @media (min-width: 1680px) {
    max-width: 1780px;
    padding: 120px 250px 99px 250px;
  }

  ::before {
    content: "";
    width: 100%;
    height: 530px;
    margin-top: 140px;
    background-color: #fafafa;
    position: absolute;
    z-index: -1;

    @media (min-width: 768px) {
      height: 450px;
      background-color: #fafafa;
      left: 0;
      margin-top: 0;
    }

    ${fluidValue("width", 805, 585, 1199, 768)}

    ${fluidValue("width", 1170, 805, 1679, 1200)}

    @media (min-width: 1680px) {
      height: 680px;
      width: 1190px;
    }

    ${fluidValue("width", 2400, 1190, 3840, 1680)}
  }
`;

export const TextBox = styled.div`
  margin-top: 55px;

  @media (min-width: 768px) {
    flex: 1;
    padding: 70px 84px 70px 0;
    margin-top: 0;
  }

  @media (min-width: 1680px) {
    padding: 171px 190px 171px 50px;
  }
`;

export const Title = styled.h2`
  font-size: 30px;
  line-height: 36px;

  @media (min-width: 1680px) {
    font-family: Helvetica;
    font-size: 50px;
    line-height: 60px;
  }
`;

export const Paragraphe = styled.p`
  font-family: "Mercury G2";
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: 24px;
  margin: 20px 0 50px;

  @media (min-width: 1680px) {
    font-family: Helvetica;
    font-size: 18px;
    line-height: 27px;
    font-style: normal;
  }
`;

export const CircleBox = styled.div`
  height: 290px;
  width: 290px;
  padding: 15px;

  @media (min-width: 768px) {
    padding: 0px;
  }

  @media (min-width: 1680px) {
    height: 480px;
    width: 480px;
  }
`;

export const RotatingCircle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-color: #8dc63f;
  border-style: solid;
  border-width: 1px;
  display: flex;
  justify-content: center;
  align-items: center;

  &.circle1 {
    border-color: #f37e26;

    ::before {
      border-color: #f37e26;
    }
  }

  &.circle2 {
    border-color: #e75228;

    ::before {
      border-color: #e75228;
    }
  }

  &.circle3 {
    border-color: #c8da2d;

    ::before {
      border-color: #c8da2d;
    }
  }

  &.circle4 {
    border-color: #009fd6;

    ::before {
      border-color: #009fd6;
    }
  }

  &.circle5 {
    border-color: #fbb316;

    ::before {
      border-color: #fbb316;
    }
  }

  ::before {
    content: "";
    height: 12px;
    width: 12px;
    border-radius: 50%;
    border-color: #8dc63f;
    border-style: solid;
    border-width: 3px;
    position: absolute;
    align-self: flex-end;
    margin-bottom: -6px;
    background-color: #fff;
    animation: rotating-circle 16s linear infinite forwards;
    transform-origin: 50% -123px;

    @media (min-width: 768px) {
      transform-origin: 50% -138px;
      margin-bottom: -7px;
    }

    @media (min-width: 1680px) {
      height: 20px;
      width: 20px;
      border-width: 5px;
      transform-origin: 50% -228px;
      margin-bottom: -9px;
    }
  }

  @media (min-width: 1680px) {
    border-width: 2px;
  }

  @keyframes rotating-circle {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const InnerCircle = styled.div<Props>`
  width: 55%;
  height: 55%;
  position: relative;
  visibility: ${(props) => (props.animation ? "visible" : "hidden")};
  opacity: ${(props) => (props.animation ? "1" : "0")};
  transform: ${(props) => (props.animation ? "scale(1)" : "scale(0.9)")};
  transition: all 100ms linear;
`;
