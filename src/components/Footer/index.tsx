import { FC } from "react";

import * as S from "./styled";
import { LinkPage } from "@/components/LinkPage";

export const Footer: FC = () => {
  return (
    <S.Footer>
      <S.Container>
        <S.Content>
          <S.Title>About ADB Knowledge Advisory Services Center</S.Title>
          <S.Paragraphe>
            Sed aliquet eleifend dapibus. Aliquam erat volutpat. Aliquam erat
            volutpat. Curabitur ante lorem, vehicula ut lacinia cursus, posuere
            nec turpis. Praesent bibendum turpis ut leo porttitor, sit amet
            tempor turpis convallis. Nullam nec pharetra turpis, sed elementum
            arcu. Nullam venenatis sit amet justo id euismod. Nulla dictum
            ligula commodo venenatis luctus. Duis at enim suscipit, luctus nunc
            eu, varius lacus. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Mauris eu lacus congue,
            lacinia leo non, facilisis tortor. Nam ultricies enim at dolor
            porta, at malesuada lorem luctus. Maecenas id porttitor magna.
            Suspendisse aliquet semper nulla, in aliquam elit auctor quis.
            Vestibulum vel turpis nibh.
          </S.Paragraphe>
          <LinkPage href="/contact-us">Contact US</LinkPage>
        </S.Content>
        <S.Content className="secondBox">
          <S.Title className="secondBox">About ADB </S.Title>
          <S.Paragraphe className="secondBox">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            lectus nulla, mollis ac facilisis id, auctor sed justo. Sed ut
            consectetur massa. Fusce tristique semper justo, ac porta tortor
            consectetur a. Ut ullamcorper vel eros non efficitur. Fusce eu
            tortor ipsum. Suspendisse varius interdum dapibus. Suspendisse
            potenti.
          </S.Paragraphe>
          <S.CopyRight>© 2021 Insomniac Design Study</S.CopyRight>
          <S.CopyRight>Website created by Insomniac Design, Inc.</S.CopyRight>
        </S.Content>
      </S.Container>
    </S.Footer>
  );
};
