import * as S from "./styled";

const MessageBox = () => {
  return (
    <S.Container>
      <S.MessageBox>
        <S.MessageTitle>IDS&apos;s Message</S.MessageTitle>
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
      </S.MessageBox>
    </S.Container>
  );
};

export default MessageBox;
