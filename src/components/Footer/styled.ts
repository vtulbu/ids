import { fluidValue } from "@/utils/Mixins/fluidValue";
import styled from "styled-components";

export const Footer = styled.footer`
  background: #003c82;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  max-width: 1680px;
  padding: 50px 3.75vw;

  @media (min-width: 768px) {
    padding: 70px 0;
    width: 696px;
  }

  ${fluidValue("width", 975, 696, 1679, 1200)}

  @media (min-width: 1680px) {
    display: flex;
    column-gap: 125px;
    padding: 95px 0;
    width: 1110px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &.secondBox {
    margin-top: 64px;

    @media (min-width: 1680px) {
      margin-top: 0;
    }
  }
`;

export const Title = styled.h3`
  font-size: 28px;
  line-height: 36px;
  color: #fff;
  font-weight: 500;
  margin-bottom: 20px;

  &.secondBox {
    margin-bottom: 35px;

    @media (min-width: 768px) {
      margin-bottom: 44px;
    }

    @media (min-width: 1024px) {
      margin-bottom: 40px;
    }
  }

  @media (min-width: 1024px) {
    line-height: 42px;
    margin-bottom: 40px;
  }
`;

export const Paragraphe = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 1.12px;
  color: #fff;
  margin-bottom: 40px;

  &.secondBox {
    margin-bottom: 65px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 85px;
  }

  @media (min-width: 1680px) {
    font-size: 18px;
    line-height: 27px;
  }
`;

export const CopyRight = styled.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  color: #fff;
  display: block;
`;
