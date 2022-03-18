import { fluidValue } from "@/utils/Mixins/fluidValue";
import { theme } from "@/utils/theme/theme";
import styled from "styled-components";

export const Section = styled.section`
  padding: 50px 0;
  padding-left: 12px;

  ${fluidValue("padding-left", 184, 12, 767, 424)}

  ::before {
    content: "";
    background-color: #1996c3;
    position: absolute;
    width: 50%;
    left: 0;
    height: 339px;

    ${fluidValue("height", 485, 339, 425, 321)}
    ${fluidValue("height", 521, 486, 478, 426)}

    @media (min-width: 478px) {
      height: 521px;
    }

    @media (min-width: 768px) {
      width: 30vw;
      height: 337px;
    }

    @media (min-width: 1200px) {
      height: calc(32vw);
    }

    @media (min-width: 1680px) {
      height: 520px;
      width: 40vw;
    }
  }

  ::after {
    @media (min-width: 768px) {
      content: "";
      background-color: #d84e30;
      right: 0;
      margin-top: 261px;
      position: absolute;
      z-index: -1;
      width: 30vw;
      height: 532px;

      @media (min-width: 1680px) {
        height: 423px;
        margin-top: 363px;
        width: 40vw;
      }
    }
  }

  @media (min-width: 768px) {
    display: flex;
    padding: 70px 0 50px;
  }

  @media (min-width: 1680px) {
    padding: 120px 0 100px;
  }
`;

export const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 280px;

  @media (min-width: 768px) {
    width: 308px;
  }

  @media (min-width: 1200px) {
    width: 26vw;
  }

  @media (min-width: 1680px) {
    width: 438px;
    margin-left: 105px;
  }
`;

export const GreenSquare = styled.div`
  background-color: #8dc63f;
  position: relative;
  margin-top: -100px;
  padding: 50px 88px 50px 20px;
  width: 100%;
  color: ${(props) => props.theme.colors.white};

  @media (min-width: 768px) {
    padding: 50px 46px 243px;
  }

  @media (min-width: 1680px) {
    padding: 41px 65px 59px;
  }
`;

export const Name = styled.h3`
  font-size: 20px;
  font-style: italic;
  line-height: 24px;
  font-weight: 600;

  @media (min-width: 1680px) {
    font-size: 24px;
    font-style: normal;
    line-height: 28px;
  }
`;

export const Message = styled.p`
  font-style: italic;
  line-height: 24px;
  margin: 10px 0 20px;

  @media (min-width: 768px) {
    margin: 14px 0 30px;
  }

  @media (min-width: 1680px) {
    font-size: 18px;
    font-style: normal;
    line-height: 27px;
    margin: 18px 0 11px;
  }
`;

export const Email = styled.a`
  line-height: 24px;
  color: ${(props) => props.theme.colors.white};

  :hover {
    color: #d9d9d9;
  }
  @media (min-width: 1680px) {
    font-size: 18px;
    font-style: normal;
    line-height: 27px;
  }
`;

export const MessageBlock = styled.div`
  padding: 50px 20px;
  background-color: #eff9fd;

  @media (min-width: 768px) {
    padding: 70px 60px;
    width: 388px;
    margin-top: 50px;
  }

  @media (min-width: 1200px) {
    width: 32vw;
  }

  @media (min-width: 1680px) {
    width: 769px;
    height: 659px;
    margin-top: 0;
    align-self: flex-end;
  }
`;

export const Title = styled.h3`
  font-size: 30px;
  line-height: 36px;
  margin: 0;

  @media (min-width: 1680px) {
    font-size: 50px;
    line-height: 60px;
  }
`;

export const SubtitleMessage = styled.p`
  font-size: 18px;
  font-style: italic;
  line-height: 27px;
  color: #e345c2;
  margin: 20px 0 30px;

  @media (min-width: 768px) {
    margin: 17px 0 33px;
  }
  @media (min-width: 1680px) {
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
  font-weight: 400;

  @media (min-width: 1680px) {
    font-size: 18px;
    line-height: 27px;
  }
`;
