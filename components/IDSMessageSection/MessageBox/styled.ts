import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: clamp(308px, 90vw, 370px);
  align-self: flex-end;

  @media only screen and (min-width: 768px) {
    background: linear-gradient(
      180deg,
      transparent 0%,
      transparent 30%,
      #d84e30 30%,
      #d84e30 100%
    );
    width: 100%;
    justify-content: flex-start;
  }
`;

export const MessageBox = styled.div`
  background-color: #eff9fd;
  padding: 50px 20px;

  @media only screen and (min-width: 768px) {
    padding: 70px 60px;
    width: clamp(388px, 90%, 750px);
    height: 742px;
  }

  @media only screen and (min-width: 1680px) {
    padding: 120px 115px 95px;
    width: clamp(769px, 90%, 1500px);
  }
`;

export const MessageTitle = styled.h2`
  font-size: 30px;
  line-height: 36px;
  margin: 0;

  @media only screen and (min-width: 1680px) {
    font-size: 50px;
    line-height: 60px;
  }
`;

export const SubtitleMessage = styled.p`
  font-family: "Libre Baskerville", serif;
  font-size: 16px;
  font-style: italic;
  line-height: 27px;
  color: #e345c2;
  margin: 20px 0 30px;

  @media only screen and (min-width: 768px) {
    margin: 17px 0 33px;
  }

  @media only screen and (min-width: 1680px) {
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 33px;
    margin: 20px 0 30px;
  }
`;

export const MessageParagraphe = styled.p`
  font-size: 16px;
  line-height: 24px;
  margin: 0;

  @media only screen and (min-width: 1680px) {
    font-size: 18px;
    line-height: 27px;
  }
`;
