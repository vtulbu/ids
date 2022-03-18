import styled from "styled-components";
import { fluidValue } from "@/utils/Mixins/fluidValue";

export const PageHead = styled.div`
  padding: 50px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1680px;

  @media (min-width: 768px) {
    flex-direction: row;
    column-gap: 40px;
    padding: 45px 0 95px;
  }

  ${fluidValue("width", 975, 696, 1679, 1200)}

  @media (min-width: 1680px) {
    column-gap: 70px;
    padding: 52px 0 120px;
    margin-left: 105px;
  }
`;

export const TextBox = styled.div`
  align-self: center;
  max-width: 400px;

  @media (min-width: 1680px) {
    max-width: fit-content;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  line-height: 45px;

  @media (min-width: 768px) {
    width: 336px;
  }

  @media (min-width: 1680px) {
    font-size: 70px;
    line-height: 75px;
    width: 570px;
  }
`;

export const Values = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: ${(props) => props.theme.colors.primary[300]};
  text-transform: uppercase;
  margin: 40px 0 20px;
  width: 260px;

  @media (min-width: 768px) {
    margin: 40px 0 30px;
    width: fit-content;
  }

  @media (min-width: 1680px) {
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
  }
`;

export const Paragraphe = styled.p`
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 20px;
  }

  @media (min-width: 1680px) {
    font-size: 24px;
    line-height: 28px;
  }
`;

export const ImageBox = styled.div`
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;

  @media (min-width: 1680px) {
    width: 574px;
  }
`;
