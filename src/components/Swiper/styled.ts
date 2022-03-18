import { fluidValue } from "@/utils/Mixins/fluidValue";
import styled from "styled-components";

export const Swiper = styled.div`
  display: none;
  height: 40px;
  justify-content: space-between;
  width: 100%;
  max-width: 768px;

  @media (min-width: 768px) {
    display: flex;
  }

  ${fluidValue("max-width", 1000, 696, 1679, 1200)}

  @media (min-width: 1680px) {
    max-width: 1320px;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    max-width: 700px;
    height: 1px;
    background-image: linear-gradient(
      135deg,
      rgba(248, 248, 248, 0.089953) 0%,
      #fcfcfc 100%
    );

    ${fluidValue("max-width", 1000, 696, 1679, 1200)}

    @media (min-width: 1680px) {
      max-width: 1320px;
    }
  }
`;

export const SwiperBtn = styled.button`
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: 24px;
  color: #fff;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  transition: all 1000ms linear;

  &.clicked {
    &::before {
      background-color: #e76ece;
      animation: pulse-btn 2s infinite;
    }
  }

  &::before {
    content: "";
    height: 11px;
    width: 11px;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    margin-bottom: 33px;
    transition: all 200ms linear;
  }

  @keyframes pulse-btn {
    0% {
      box-shadow: 0 0 0 0 rgba(196, 35, 163, 0.5);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(196, 35, 163, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(196, 35, 163, 0);
    }
  }
`;
