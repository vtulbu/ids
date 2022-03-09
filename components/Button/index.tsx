import React, { FC } from 'react';

import * as S from './styled';

export const Button: FC = () => {
  return (
    <S.Button className="btn primary" href="pdf/KS-book_RGB_LIVE.pdf" title="Download KS-book_RGB_LIVE.pdf file" target="_blank" rel="noopener noreferrer" aria-labelledby="Download KS-book_RGB_LIVE.pdf file" download="KS-book_RGB_LIVE.pdf">
      DOWNLOAD PDF
    </S.Button>
  );
};
