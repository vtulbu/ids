import { FC } from "react";
import Image from "next/image";

import * as S from "./styled";

export const PageHead: FC = () => {
  return (
    <S.PageHead>
      <S.TextBox>
        <S.Title>Welcome to the insert some lorem copy here</S.Title>
        <S.Values>Vision, Learning, Collaboration.</S.Values>
        <S.Paragraphe>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </S.Paragraphe>
      </S.TextBox>
      <S.ImageBox>
        <Image
          src="/images/herro-image.png"
          width={575}
          height={574}
          alt="hero image"
        />
      </S.ImageBox>
    </S.PageHead>
  );
};
