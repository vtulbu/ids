import { FC } from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

import * as S from "./styled";

interface Props {
  href: string | undefined;
  pink?: boolean;
}

export const LinkPage: FC<Props> = ({ children, href, pink }) => {
  return (
    <Link href={href ? href : "/"} passHref>
      <S.Link color={pink ? "#E76ECE" : "#fff"}>
        {children} <BsArrowRight size={25} color={pink ? "#E76ECE" : "#fff"} />
      </S.Link>
    </Link>
  );
};
