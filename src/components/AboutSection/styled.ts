import { fluidValue } from "@/utils/Mixins/fluidValue";
import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 100px 0;
  padding-left: 12px;

  ${fluidValue("padding-left", 184, 12, 767, 424)}

  @media (min-width: 768px) {
    margin: 0;
    margin-bottom: 80px;
    padding-left: 0;
  }

  @media (min-width: 1680px) {
    margin-bottom: 95px;
  }

  ::before {
    content: "";
    position: absolute;
    background: #f0f0f0;
    left: 0;
    z-index: -1;
    height: 955px;
    width: 50%;

    ${fluidValue("height", 1055, 955, 767, 320)}

    @media (min-width: 768px) {
      height: 499px;
      width: 100%;
    }

    @media (min-width: 1680px) {
      height: 560px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    height: 499px;
  }

  @media (min-width: 1680px) {
    height: 560px;
    margin-left: 105px;
  }
`;

export const BlueContainer = styled.div`
  background: #003c82;
  padding: 50px 20px 86px 20px;

  @media (min-width: 768px) {
    padding: 70px 40px 257px;
    width: 308px;
  }

  @media (min-width: 1200px) {
    width: 26vw;
  }

  @media (min-width: 1680px) {
    height: 560px;
    width: 445px;
    padding: 120px 95px 233px;
  }
`;

export const About = styled.h2`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: #fff;
  text-transform: uppercase;

  @media (min-width: 1680px) {
    font-size: 18px;
    line-height: 27px;
  }
`;

export const Description = styled.p`
  font-size: 32px;
  font-weight: 400;
  line-height: 36px;
  color: #fff;
  margin-top: 30px;
  width: 228px;

  @media (min-width: 1680px) {
    font-size: 32px;
    line-height: 40px;
    margin-top: 50px;
  }
`;

export const ImageBox = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 388px;
  }

  @media (min-width: 1200px) {
    width: 32vw;
  }

  @media (min-width: 1680px) {
    height: 576px;
    width: 769px;
  }
`;

export const Paragraphe = styled.p`
  position: relative;
  margin-top: -8vw;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #fff;
  background: #1996c3;
  padding: 50px 20px;

  @media (min-width: 768px) {
    padding: 50px 50px;
    height: 364px;
    margin-bottom: -80px;
  }

  @media (min-width: 1024px) {
    margin-top: -80px;
  }

  @media (min-width: 1680px) {
    font-size: 18px;
    line-height: 27px;
    padding: 80px 114px;
  }
`;
