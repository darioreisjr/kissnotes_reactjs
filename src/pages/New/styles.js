import Styled from "styled-components";

export const Container = Styled.div`
  width: 100%;
  height:100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";
`