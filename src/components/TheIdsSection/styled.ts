import styled from "styled-components";
import { fluidValue } from "@/utils/Mixins/fluidValue";

export const Section = styled.section`
  margin-top: 70px;

  ::before {
    content: "";
    position: absolute;
    z-index: -1;
    background: #f0f0f0;
    left: 0;
    margin-top: -20px;
    height: 731px;
    width: 50%;

    ${fluidValue("height", 970, 731, 768, 360)}

    @media (min-width: 768px) {
      height: 492px;
      width: 60vw;
      margin-top: 30px;
    }

    @media (min-width: 1680px) {
      height: 576px;
      margin-top: 91px;
    }
  }

  ${fluidValue("margin-bottom", 40, 20, 768, 360)}

  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
  }
  @media (min-width: 1680px) {
    width: 100%;
    padding: 0 166px 0 180px;
    justify-content: center;
  }
`;

export const RedBox = styled.div`
  background: #d84e30;
  padding: 50px 3.75vw;

  @media (min-width: 768px) {
    padding: 60px;
    width: 456px;
    height: 412px;
    margin-right: -300px;
    margin-top: 70px;
  }

  @media (min-width: 1200px) {
    width: 38vw;
  }

  ${fluidValue("margin-right", -200, -300, 1679, 1200)}

  @media (min-width: 1680px) {
    height: 496px;
    width: 740px;
    padding: 100px;

    margin-top: 131px;
  }
`;

export const Title = styled.h3`
  font-size: 30px;
  font-style: italic;
  font-weight: 400;
  line-height: 36px;
  color: #fff;
  margin-bottom: 20px;

  @media (min-width: 1680px) {
    font-size: 50px;
    line-height: 60px;
  }
`;

export const Paragraphe = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: #fff;

  @media (min-width: 1680px) {
    font-size: 20px;
    font-style: normal;
    line-height: 27px;
  }
`;

export const ImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 84vw;
  z-index: -1;

  @media (min-width: 768px) {
    width: 542px;
    height: 553px;

    & span img {
      object-position: 50px !important;
    }
  }

  @media (min-width: 1200px) {
    & span img {
      object-position: calc(50px - 2vw) !important;
    }
  }

  @media (min-width: 1680px) {
    height: 759px;
    width: 895px;

    & span img {
      object-position: 0px !important;
    }
  }
`;
