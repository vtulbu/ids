import { FC, MouseEvent, useState } from "react";

import { Swiper } from "@/components/Swiper";

import { DesktopContainer } from "./DesktopContainer";
import { MobileContainer } from "./MobileContainer";

import { data, text } from "./mock";
import * as S from "./styled";

export const JourneySection: FC = () => {
  const [year, setYear] = useState(1);

  const swipperArr = data.map((e, i) => {
    return i === 0
      ? { buttons: e.year, id: i + 1, clicked: true }
      : { buttons: e.year, id: i + 1, clicked: false };
  });

  const [buttonsArr, setButtonArr] = useState(swipperArr);

  const handleClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    setYear(Number((e.target as HTMLObjectElement).id));
    setButtonArr((prevValue) => {
      return prevValue.map((value) => {
        if (value.id === Number((e.target as HTMLObjectElement).id)) {
          return { ...value, clicked: true };
        } else {
          return { ...value, clicked: false };
        }
      });
    });
  };

  const handleSwipeLeft = () => {
    if (year === swipperArr.length) {
      return undefined;
    } else {
      setYear((prev) => prev + 1);
      setButtonArr((prevValue) => {
        return prevValue.map((value) => {
          if (value.id === year + 1) {
            return { ...value, clicked: true };
          } else {
            return { ...value, clicked: false };
          }
        });
      });
    }
  };

  const handleSwipeRight = () => {
    if (year === 1) {
      return undefined;
    } else {
      setYear((prev) => prev - 1);
      setButtonArr((prevValue) => {
        return prevValue.map((value) => {
          if (value.id === year - 1) {
            return { ...value, clicked: true };
          } else {
            return { ...value, clicked: false };
          }
        });
      });
    }
  };

  return (
    <S.Section>
      <S.Container>
        <S.TextBox>
          <S.Title>{text.title}</S.Title>
          <S.Description>
            <S.Heading>{text.description}</S.Heading>
            <S.Paragraphe>{text.paragraphe}</S.Paragraphe>
          </S.Description>
        </S.TextBox>
        <Swiper buttons={buttonsArr} handleClick={handleClick} />
        <MobileContainer data={data} />
        <DesktopContainer
          indexSelectedYear={year}
          data={data}
          handleSwipeLeft={handleSwipeLeft}
          handleSwipeRight={handleSwipeRight}
        />
      </S.Container>
    </S.Section>
  );
};
