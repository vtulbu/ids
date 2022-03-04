import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ImageBox = styled.div`
  position: absolute;
  width: clamp(308px, 90vw, 370px);
  height: 433px;
  z-index: -1;

  @media only screen and (min-width: 768px) {
    width: 308px;
  }

  @media only screen and (min-width: 1680px) {
    width: 438px;
    height: 624px;
  }
`;

export const BlueSquare = styled.div`
  background-color: #1996c3;
  height: 355px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: -2;

  @media only screen and (min-width: 1680px) {
    height: 516px;
  }
`;

export const GreenSquare = styled.div`
  background-color: #8dc63f;
  padding: 50px 20px;
  width: clamp(308px, 90vw, 370px);

  @media only screen and (min-width: 768px) {
    width: 308px;
    margin-left: clamp(36px, 5vw, 100px);
    padding: 50px 46px 243px;
  }

  @media only screen and (min-width: 1680px) {
    width: 438px;
    margin-left: 285px;
    padding: 41px 65px 60px;
  }
`;

export const HeadingGreenSquare = styled.h2`
  font-size: 20px;
  font-style: italic;
  line-height: 24px;
  color: #ffffff;
  margin: 0;

  @media only screen and (min-width: 1680px) {
    font-size: 24px;
    font-style: normal;
    line-height: 28px;
  }
`;

export const ParagrapheGreenSquare = styled.p`
  font-style: italic;
  line-height: 24px;
  color: #ffffff;
  margin: 10px 0 20px;

  @media only screen and (min-width: 768px) {
    margin: 14px 0 30px;
  }

  @media only screen and (min-width: 1680px) {
    font-size: 18px;
    font-style: normal;
    line-height: 27px;
    margin: 18px 0 11px;
  }
`;

export const EmailContact = styled.a`
  line-height: 24px;
  color: #ffffff;

  :hover {
    color: #d9d9d9;
  }

  @media only screen and (min-width: 1680px) {
    font-size: 18px;
    font-style: normal;
    line-height: 27px;
  }
`;
