import { FC, useState } from "react";

import * as S from "./styled";

export const DropdownDescription: FC = () => {
  const [clickBtn, setClickBtn] = useState(false);

  return (
    <S.Container>
      <S.Button
        clickBtn={clickBtn}
        onClick={() => setClickBtn(!clickBtn)}
      ></S.Button>

      <S.Paragraphe clickBtn={clickBtn}>
        Today, our knowledge management is guided by Strategy 2030, with a
        call-to-action for ADB to solidify its role as knowledge solutions
        provider. Our Knowledge Management Action Plan 2021&#45;2025 adds
        substance to this call. We work closely with ADB&#39;s developing
        members to back our lending with knowledge. At the country level, our
        country knowledge plans, with each country director designated as
        knowledge custodian, help strategic planning, implementation, and
        monitoring of the knowledge operations.
        <br />
        <br />
        <br />
        Despite the region&#39;s profound economic transformation—with many
        countries now middle-income, and hundreds of millions of people lifted
        out of poverty—many critical challenges remain. Countering these
        challenges would not be possible for developing Asia and the Pacific
        without harnessing the power of knowledge. The coronavirus disease
        (COVID-19) pandemic has been unparalleled in reminding us of this
        point—accelerating and diversifying trends in knowledge management.
        Pandemic responses show that a country and its people can be only as
        effective as the knowledge they harness, share, and apply. The same
        pertains to organizations. ADB is using a combination of culture,
        systems, and process changes for knowledge management to effectively
        address the pandemic across sectors, agencies, and countries.
        <br />
        <br />
        <br />
        This book is the story of ADB&#39;s journey through various stages of
        our knowledge management process from 1966 until today. We aspire to be
        the most valued knowledge advisor to our developing members; a vibrant
        learning organization that encourages collaboration; and a platform for
        sharing ideas, knowledge, and experience.In 2019, we began capturing
        knowledge solutions in the form of brief case studies to demonstrate how
        we worked with our countries to address development challenges. We also
        started collecting stories and case studies to document how innovation
        helps improve the quality of our investment products. It is from these
        case studies, shared by ADB staff, that you will see the depth and
        breadth of how ADB and our developing members jointly create knowledge
        solutions. I invite you to delve into these knowledge solutions and
        journey across the rich knowledge landscape of ADB and developing Asia
        and the Pacific.
        <br />
        <br />
        <br />
        The journey will not stop here.
        <br />
        <br />
        <br />
        Amid the region&#39;s ever-evolving development challenges, ADB will
        continue to harness and manage knowledge with its members for their
        green, resilient, inclusive, and sustainable development.
      </S.Paragraphe>
    </S.Container>
  );
};
