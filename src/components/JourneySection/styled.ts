import styled from "styled-components";
import { motion } from "framer-motion";
import { fluidValue } from "@/utils/Mixins/fluidValue";

export const Section = styled.section`
  background: #266299 url(/images/knowledge-bg.svg) 50%/100% 70% no-repeat;
  color: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  padding: 50px 3.75vw;

  @media (min-width: 768px) {
    padding: 70px 36px;
    display: flex;
    flex-direction: column;
    row-gap: 70px;
    max-width: 768px;
  }

  ${fluidValue("max-width", 1050, 768, 1679, 1200)}

  @media (min-width: 1680px) {
    max-width: 1200px;
    padding: 137px 0 120px;
    margin-left: 105px;
  }
`;

export const TextBox = styled.div`
  margin-bottom: 50px;

  @media (min-width: 768px) {
    display: flex;
    column-gap: 64px;
    margin-bottom: 0;
  }

  @media (min-width: 1680px) {
    column-gap: 227px;
  }
`;

export const Title = styled.h2`
  font-size: 28px;
  line-height: 36px;
  margin-bottom: 40px;
  font-weight: 400;

  @media (min-width: 1680px) {
    font-family: Helvetica;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    height: 200px;
    width: 343px;
  }
`;

export const Description = styled.div`
  flex: 1 0 50%;
`;

export const Heading = styled.h5`
  font-family: Mercury Text G2;
  font-size: 18px;
  font-style: italic;
  line-height: 27px;
  margin-bottom: 40px;

  @media (min-width: 1680px) {
    font-size: 22px;
    line-height: 33px;
  }
`;

export const Paragraphe = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  @media (min-width: 1680px) {
    font-family: Helvetica;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
  }
`;

export const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 50px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Stage = styled(motion.div)`
  @media (min-width: 768px) {
    flex: 1;
  }
`;

export const Year = styled.div`
  margin-bottom: 40px;
  height: 38px;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    right: 3.75vw;
    left: 3.75vw;
    margin-top: 40px;
    height: 1px;
    background-image: linear-gradient(
      135deg,
      rgba(248, 248, 248, 0.089953) 0%,
      #fcfcfc 100%
    );

    @media (min-width: 768px) {
      display: none;
    }
  }

  &::after {
    content: "";
    position: absolute;
    height: 11px;
    width: 11px;
    right: 3.75vw;
    border-radius: 50%;
    background: #e76ece;

    @media (min-width: 768px) {
      display: none;
    }
  }
`;

export const IconBox = styled.div`
  position: relative;
  height: 60px;
  width: 60px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 30px;
  }

  @media (min-width: 1680px) {
    height: 90px;
    width: 90px;
    margin-bottom: 35px;
  }
`;

export const StageTitle = styled.h3`
  font-family: Mercury Text G2;
  font-size: 28px;
  font-style: italic;
  line-height: 36px;
  margin-bottom: 20px;

  @media (min-width: 1680px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const StageSubTitle = styled.h4`
  font-size: 18px;
  font-style: italic;
  font-weight: 600;
  line-height: 27px;
  margin-bottom: 15px;

  @media (min-width: 1680px) {
    font-size: 24px;
    line-height: 28px;
  }
`;

export const StageDescription = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;

  @media (min-width: 1680px) {
    font-size: 18px;
    line-height: 27px;
  }
`;

export const StageParagraphe = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 40px;

  @media (min-width: 1680px) {
    font-family: Helvetica;
    font-size: 18px;
    line-height: 27px;
    margin-bottom: 35px;
  }
`;

export const DesktopContainer = styled(motion.div)`
  display: none;
  cursor: pointer;

  @media (min-width: 768px) {
    display: flex;
    column-gap: 40px;
  }

  @media (min-width: 1680px) {
    column-gap: 85px;
  }
`;
