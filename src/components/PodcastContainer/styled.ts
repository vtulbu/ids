import styled from "styled-components";

export const Container = styled.div`
  padding: 50px 3.75vw;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    padding: 40px 36px 40px 93px;
    column-gap: 80px;
    width: 768px;
  }

  @media (min-width: 1680px) {
    padding: 80px 0;
    width: 1200px;
    justify-content: space-between;
    margin-left: 105px;
  }
`;

export const Paragraphe = styled.p`
  font-size: 18px;
  font-style: italic;
  line-height: 27px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }

  @media (min-width: 1680px) {
    font-size: 22px;
    font-style: normal;
    line-height: 33px;
    width: 640px;
  }
`;
