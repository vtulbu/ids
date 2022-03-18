import { FC } from "react";
import Image from "next/image";

import * as S from "./styled";

interface Props {
  imgSrc: string | undefined;
}

export const ImageSlider: FC<Props> = ({ imgSrc }) => {
  return (
    <S.ImageSliderContainer>
      <S.ImageContainerBack>
        <Image
          src="/images/windowImg/stage-bg.png"
          alt="background image stars"
          objectFit="cover"
          layout="fill"
        />
        <S.ImgBottom>
          <Image
            src="/images/bg-img.png"
            alt="background image stars"
            objectFit="contain"
            layout="fill"
          />
        </S.ImgBottom>
        <S.Window>
          <S.BarWindow>
            <S.Bullet></S.Bullet>
          </S.BarWindow>
          <S.ImageContainerWindow>
            <Image
              src={`/images/windowImg/${imgSrc}`}
              alt="background image stars"
              objectFit="cover"
              layout="fill"
            />
          </S.ImageContainerWindow>
        </S.Window>
      </S.ImageContainerBack>
    </S.ImageSliderContainer>
  );
};
