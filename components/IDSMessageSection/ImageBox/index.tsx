import Image from "next/image";
import * as S from "./styled";

const ImageBox = () => {
  return (
    <S.Container>
      <S.BlueSquare>
        <S.ImageBox>
          <Image
            src="/images/ImageMessage.png"
            height={621}
            width={438}
            alt="Cosmonaut fishing stars :)"
          />
        </S.ImageBox>
      </S.BlueSquare>
      <S.GreenSquare>
        <S.HeadingGreenSquare>Lord Voldemort</S.HeadingGreenSquare>
        <S.ParagrapheGreenSquare>
          Vice-President for Knowledge Management and Sustainable Development
          Activities
        </S.ParagrapheGreenSquare>
        <S.EmailContact href="mailto:lordVoldemort@example.com">
          lordVoldemort@example.com
        </S.EmailContact>
      </S.GreenSquare>
    </S.Container>
  );
};

export default ImageBox;
