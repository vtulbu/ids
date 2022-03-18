import { FC } from "react";

import { Button } from "@/components/Button";

import * as S from "./styled";

export const PodcastSection: FC = () => {
  return (
    <S.Container>
      <S.Paragraphe>
        To learn even more about IDS&#39;s knowledge solutions, check out
        IDS&#39;s TED-x style talks and podcasts.
      </S.Paragraphe>
      <Button
        ariaLabel="Go to Youtube"
        href="https://www.youtube.com/channel/UCOUlYVQxdbNRwykRg6IGFfQ"
        target="_blank"
        title="Youtube"
        rel="noreferrer noopener"
        download="none"
      >
        VIEW PODCASTS
      </Button>
    </S.Container>
  );
};
