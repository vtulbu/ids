import React, { FC } from "react";

import * as S from "./styled";

interface Props {
  href: string;
  title: string;
  target: "_blank" | "_self" | "_parent" | "_top";
  rel: string;
  ariaLabel: string;
  download: string;
}

export const Button: FC<Props> = ({
  children,
  href,
  title,
  target,
  rel,
  ariaLabel,
  download,
}) => {
  return (
    <S.Button
      href={href}
      title={title}
      target={target}
      rel={rel}
      aria-labelledby={ariaLabel}
      download={download}
    >
      {children}
    </S.Button>
  );
};
