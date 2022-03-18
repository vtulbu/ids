import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { NavMenu } from "@/components/NavMenu";
import { ButtonMenu } from "@/components/ButtonMenu";

import * as S from "./styled";
import Headroom from "react-headroom";

export const Header: FC = () => {
  const [menuState, setMenuState] = useState(false);

  return (
    <S.Header>
      <S.StyledHeadroom disableInlineStyles upTolerance={40} downTolerance={40}>
        <S.Container>
          <Link href="/" passHref>
            <S.Logo>
              <Image
                layout="fill"
                objectFit="contain"
                src="/images/header-logo.png"
                alt="logo"
              />
            </S.Logo>
          </Link>
          <NavMenu visible={menuState} />
          <ButtonMenu
            animation={menuState}
            onClick={() => setMenuState(!menuState)}
          />
        </S.Container>
      </S.StyledHeadroom>
    </S.Header>
  );
};
