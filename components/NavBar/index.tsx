import Link from "next/link";
import { Logo } from "../SVGIcons";
import { navData } from "./mock";
import * as S from "./styled";

const NavBar = () => {
  return (
    <S.Container>
      <Link href="/">
        <a>
          <S.LogoBox>
            <Logo />
          </S.LogoBox>
        </a>
      </Link>
      <S.NavigationMenu>
        <S.UnorderedList>
          {navData.map((e) => {
            return (
              <S.ListItem key={e.id}>
                <Link href={e.link} passHref>
                  <S.AnchorLink> {e.label}</S.AnchorLink>
                </Link>
              </S.ListItem>
            );
          })}
        </S.UnorderedList>
        <S.DownloadButton onClick={() => console.log("Download started")}>
          Download PDF
        </S.DownloadButton>
      </S.NavigationMenu>
      <S.ExitButton />
    </S.Container>
  );
};

export default NavBar;
