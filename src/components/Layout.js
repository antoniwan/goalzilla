import React from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Footer from "./Footer";
import Header from "./Header";

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr 50px;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 100vh;
  width: 100vw;

  main {
    background-color: var(--color-white);
  }
`;

export default function Layout({ children }) {
  return (
    <StyledLayout>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
      <Footer />
    </StyledLayout>
  );
}
