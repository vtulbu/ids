import Image from "next/image";
import ImageBox from "./ImageBox";
import MessageBox from "./MessageBox";
import * as S from "./styled";

const IDSMessage = () => {
  return (
    <S.Container>
      <ImageBox />
      <MessageBox />
    </S.Container>
  );
};

export default IDSMessage;
