import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Button } from '../Button';

import { data } from './mock';

import { Props } from './Header';

import * as S from './styled';

export const Header: FC<Props> = () => {
  return (
    <S.Header>
      <S.Container>
        <Link href="/" passHref>
          <S.Logo>
            <Image layout="fill" objectFit="contain" src="/images/header-logo.png" alt="logo" />
          </S.Logo>
        </Link>
        <S.Nav>
          {data.map(({ id, url, title }) => (
            <Link href={url} key={id} passHref>
              <S.Link> {title}</S.Link>
            </Link>
          ))}
        </S.Nav>
        <Button />
        <S.ExitButton />
      </S.Container>
    </S.Header>
  );
};
