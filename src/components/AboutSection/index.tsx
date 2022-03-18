import { FC } from "react";
import Image from "next/image";

import * as S from "./styled";

export const About: FC = () => {
  return (
    <S.Section>
      <S.Container>
        <S.BlueContainer>
          <S.About>About</S.About>
          <S.Description>
            IDS&apos;s Knowledge Management in Action
          </S.Description>
        </S.BlueContainer>
        <S.ImageBox>
          <Image
            src="/images/night-sky.png"
            width={769}
            height={577}
            alt="night sky painting"
          />
          <S.Paragraphe>
            Sed metus ligula, auctor eget sagittis eu, elementum vel est. Nam in
            dolor bibendum, mollis felis eget, ullamcorper odio. Praesent nunc
            nisi, rutrum mollis cursus vel, aliquet a nunc. Sed a varius sapien.
            Nulla et massa faucibus, pharetra felis at, aliquam neque. Maecenas
            volutpat malesuada erat eu finibus. Proin in magna id massa pharetra
            rutrum eu nec est. Etiam ultrices tortor sapien, placerat ultrices
            nisl viverra non.
          </S.Paragraphe>
        </S.ImageBox>
      </S.Container>
    </S.Section>
  );
};
