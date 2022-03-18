import styled from "styled-components";

export const ImageSliderContainer = styled.div`
  height: 424px;
  width: 335px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1680px) {
    height: 615px;
    width: 691px;
  }
`;

export const ImageContainerBack = styled.div`
  position: relative;
  height: 80%;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1680px) {
    height: 100%;
  }
`;

export const Window = styled.div`
  width: 335px;
  height: 215px;
  position: absolute;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.white};
  overflow: hidden;

  @media (min-width: 1680px) {
    height: 410px;
    width: 691px;
  }
`;

export const BarWindow = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  padding: 7px 9px;
  background-color: #e1e3e8;
`;

export const Bullet = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #fbb316;
  margin-left: 15px;

  @media (min-width: 1680px) {
    width: 10px;
    height: 10px;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #e75228;
    margin-left: -15px;

    @media (min-width: 1680px) {
      width: 10px;
      height: 10px;
      margin-left: -17px;
    }
  }

  &::after {
    content: "";
    background-color: #84bf42;
    margin-left: 15px;

    @media (min-width: 1680px) {
      margin-left: 17px;
    }
  }
`;

export const ImageContainerWindow = styled.div`
  position: relative;
  height: 160%;
  width: 100%;
  transform: translateY(20%);
  animation: scroll-img 10s ease-in-out infinite alternate;

  @media (min-width: 1680px) {
    height: 170%;
  }

  &:hover {
    animation-play-state: paused;
  }

  @keyframes scroll-img {
    100% {
      transform: translateY(calc(-50%));
    }
  }
`;

export const ImgBottom = styled.div`
  position: relative;
  height: 270px;
  width: 100%;
  fill: red;
  margin-top: 70px;

  @media (min-width: 1680px) {
    height: 550px;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 4px;
    background: ${(props) => props.theme.colors.primary[300]};
  }
`;
