import { FC } from "react";
import Image from "next/image";

import { LinkPage } from "@/components/LinkPage";

import { Data } from "./mock";
import * as S from "./styled";

interface Props {
  data: Data;
}

export const MobileContainer: FC<Props> = ({ data }) => {
  return (
    <S.MobileContainer>
      {data.map((e) => {
        return (
          <S.Stage key={e.id}>
            <S.Year>{e.year}</S.Year>
            <S.IconBox>
              <Image
                src={`/images/stagesImg/${e.icon}`}
                alt="icon"
                objectFit="contain"
                layout="fill"
              />
            </S.IconBox>
            <S.StageTitle>{e.title}</S.StageTitle>
            {e.subtitle && <S.StageSubTitle>{e.subtitle}</S.StageSubTitle>}
            <S.StageDescription>{e.description}</S.StageDescription>
            <S.StageParagraphe>{e.paragraphe}</S.StageParagraphe>
            <LinkPage href={e.link}>READ MORE</LinkPage>
          </S.Stage>
        );
      })}
    </S.MobileContainer>
  );
};
