import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";

import { LinkPage } from "@/components/LinkPage";

import { content } from "./content";

import * as S from "./styled";

export const SpaceSection: FC = () => {
  let counter = useRef(0);
  const [classCircle, setClassCircle] = useState("");
  const [image, setImage] = useState("icon-counter-agriculture.svg");
  const [animationState, setAnimationState] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (counter.current === content.class.length) {
        counter.current = 0;
        setClassCircle(content.class[counter.current]);
        setImage(content.images[counter.current]);
        counter.current++;
        setAnimationState(true);
      } else {
        setClassCircle(content.class[counter.current]);
        setImage(content.images[counter.current]);
        counter.current++;
        setAnimationState(true);
      }
    }, 1800);
    const timeHide = setTimeout(() => {
      setAnimationState(false);
    }, 1500);

    return () => {
      clearTimeout(timeOut);
      clearTimeout(timeHide);
    };
  }, [classCircle]);

  return (
    <S.Section>
      <S.CircleBox>
        <S.RotatingCircle className={classCircle}>
          <S.InnerCircle animation={animationState}>
            <Image
              src={`/images/spaceImg/${image}`}
              alt="icons"
              layout="fill"
              objectFit="contain"
              priority
            />
          </S.InnerCircle>
        </S.RotatingCircle>
      </S.CircleBox>
      <S.TextBox>
        <S.Title>Space</S.Title>
        <S.Paragraphe>
          Aliquam ornare mauris ex, sed tincidunt neque facilisis id. Maecenas
          vitae ante nec massa varius volutpat. Interdum et malesuada fames ac
          ante ipsum primis in faucibus. Praesent congue orci et nunc ultricies
          dapibus. Aliquam condimentum porttitor nulla. Phasellus suscipit risus
          sit amet mi interdum faucibus. Quisque egestas lorem ante, id eleifend
          velit mattis nec.
        </S.Paragraphe>
        <LinkPage href="/knowledge-solutions" pink>
          VIEW ALL
        </LinkPage>
      </S.TextBox>
    </S.Section>
  );
};
