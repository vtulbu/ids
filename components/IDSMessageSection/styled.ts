import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 50px 0;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    padding: 70px 0 50px;
    flex-direction: row;
  }

  @media only screen and (min-width: 1680px) {
    padding: 120px 0 100px;
  }
`;
