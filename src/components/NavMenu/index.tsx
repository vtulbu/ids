import { FC, useEffect, useRef, useState } from "react";
import Link from "next/link";

import { Button } from "@/components/Button";

import { data } from "./mock";

import * as S from "./styled";

interface Props {
  visible: boolean;
}

export const NavMenu: FC<Props> = ({ visible }) => {
  useEffect(() => {
    visible
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
  }, [visible]);

  return (
    <S.Container visible={visible}>
      <S.Nav>
        {data.map(({ id, url, title }) => (
          <Link href={url} key={id} passHref>
            <S.Link
              title={`${title.toLowerCase()} link`}
              aria-labelledby={`Go to page ${title}`}
            >
              {title}
            </S.Link>
          </Link>
        ))}
      </S.Nav>
      <Button
        href="pdf/KS-book_RGB_LIVE.pdf"
        title="Download KS-book_RGB_LIVE.pdf file"
        target="_blank"
        rel="noopener noreferrer"
        ariaLabel="Download KS-book_RGB_LIVE.pdf file"
        download="KS-book_RGB_LIVE.pdf"
      >
        DOWNLOAD PDF
      </Button>
    </S.Container>
  );
};
