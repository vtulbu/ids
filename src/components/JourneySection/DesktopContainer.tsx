import { FC } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

import { ImageSlider } from "@/components/ImageSlider";
import { LinkPage } from "@/components/LinkPage";

import { Data } from "./mock";
import * as S from "./styled";

interface Props {
  indexSelectedYear: number;
  data: Data;
  handleSwipeLeft: () => void;
  handleSwipeRight: () => void;
}

export const DesktopContainer: FC<Props> = ({
  indexSelectedYear,
  data,
  handleSwipeLeft,
  handleSwipeRight,
}) => {
  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <AnimatePresence>
      <S.DesktopContainer
        key={indexSelectedYear}
        initial="imageInitial"
        animate="imageAnimate"
        variants={{
          imageInitial: {
            opacity: 0,
          },
          imageAnimate: {
            opacity: 1,
            transition: {
              type: "circIn",
              duration: 0.6,
            },
          },
        }}
        {...handlers}
      >
        <S.Stage
          key={indexSelectedYear}
          initial="imageInitial"
          animate="imageAnimate"
          variants={{
            imageInitial: {
              y: 100,
            },
            imageAnimate: {
              y: 0,
              transition: {
                type: "easeIn",
                duration: 0.7,
              },
            },
          }}
        >
          <S.IconBox>
            <Image
              src={`/images/stagesImg/${
                data.find((e) => e?.id === indexSelectedYear)?.icon
              }`}
              alt="icon"
              objectFit="contain"
              layout="fill"
            />
          </S.IconBox>
          <S.StageTitle>
            {data.find((e) => e?.id === indexSelectedYear)?.title}
          </S.StageTitle>
          {data.find((e) => e?.id === indexSelectedYear)?.subtitle && (
            <S.StageSubTitle>
              {data.find((e) => e?.id === indexSelectedYear)?.subtitle}
            </S.StageSubTitle>
          )}
          <S.StageDescription>
            {data.find((e) => e?.id === indexSelectedYear)?.description}
          </S.StageDescription>
          <S.StageParagraphe>
            {data.find((e) => e?.id === indexSelectedYear)?.paragraphe}
          </S.StageParagraphe>
          <LinkPage href={data.find((e) => e?.id === indexSelectedYear)?.link}>
            READ MORE
          </LinkPage>
        </S.Stage>
        <ImageSlider
          imgSrc={data.find((e) => e?.id === indexSelectedYear)?.imgWindow}
        />
      </S.DesktopContainer>
    </AnimatePresence>
  );
};
