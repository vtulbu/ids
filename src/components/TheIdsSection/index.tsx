import { FC, useEffect, useRef } from "react";
import Image from "next/image";

import * as S from "./styled";

export const TheIdsSection: FC = () => {
  return (
    <S.Section>
      <S.RedBox>
        <S.Title> The IDS</S.Title>
        <S.Paragraphe>
          Donec tristique dolor non lectus tincidunt, a lacinia libero suscipit.
          Quisque ultrices ex lectus, non lobortis nibh volutpat at. Vivamus
          auctor urna at nulla vulputate ultricies. Aliquam dictum est elit, a
          imperdiet ante sollicitudin et. Suspendisse accumsan non mauris vitae
          cursus. Nullam posuere dignissim arcu, quis dictum quam tempus eget.
          Sed scelerisque tortor eu hendrerit aliquam. Nullam maximus auctor
          vulputate. Maecenas in finibus metus.{" "}
        </S.Paragraphe>
      </S.RedBox>
      <S.ImageBox>
        <Image
          src="/images/bitmap.png"
          alt="Very inventiv cosmonaut"
          objectFit="cover"
          layout="fill"
        />
      </S.ImageBox>
    </S.Section>
  );
};
