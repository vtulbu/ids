import { FC } from "react";
import Image from "next/image";

import * as S from "./styled";

export const MessageSection: FC = () => {
  return (
    <S.Section>
      <S.ImageBox>
        <Image
          src="/images/ImageMessage.png"
          height={621}
          width={438}
          alt="Cosmonaut fishing stars :)"
        />
        <S.GreenSquare>
          <S.Name>Lord Voldemort</S.Name>
          <S.Message>
            Vice-President for Knowledge Management and Sustainable Development
            Activities
          </S.Message>
          <S.Email href="mailto:lordVoldemort@example.com">
            lordVoldemort@example.com
          </S.Email>
        </S.GreenSquare>
      </S.ImageBox>
      <S.MessageBlock>
        <S.Title>IDS&apos;s Message</S.Title>
        <S.SubtitleMessage>
          Knowledge management has always been intertwined with the work of
          Insomniac Design Study (IDS).
        </S.SubtitleMessage>
        <S.MessageParagraphe>
          Sed aliquet eleifend dapibus. Aliquam erat volutpat. Aliquam erat
          volutpat. Curabitur ante lorem, vehicula ut lacinia cursus, posuere
          nec turpis. Praesent bibendum turpis ut leo porttitor, sit amet tempor
          turpis convallis. Nullam nec pharetra turpis, sed elementum arcu.
          Nullam venenatis sit amet justo id euismod. Nulla dictum ligula
          commodo venenatis luctus. Duis at enim suscipit, luctus nunc eu,
          varius lacus. Pellentesque habitant morbi tristique senectus et netus
          et malesuada fames ac turpis egestas. Mauris eu lacus congue, lacinia
          leo non, facilisis tortor. Nam ultricies enim at dolor porta, at
          malesuada lorem luctus.
        </S.MessageParagraphe>
      </S.MessageBlock>
    </S.Section>
  );
};
