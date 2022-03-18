import { FC, MouseEvent, useState } from "react";

import * as S from "./styled";

interface Props {
  buttons: { id: number; buttons: string; clicked: boolean }[];
  handleClick: (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => void;
}

export const Swiper: FC<Props> = ({ buttons, handleClick }) => {
  return (
    <S.Swiper>
      {buttons.map((e) => {
        return (
          <S.SwiperBtn
            key={e.id}
            id={e.id.toString()}
            onClick={(e) => handleClick(e)}
            className={e.clicked ? "clicked" : ""}
          >
            {e.buttons}
          </S.SwiperBtn>
        );
      })}
    </S.Swiper>
  );
};
