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

  main {
    background-color: var(--color-white);
  }
`;

export default function Layout({
  header = <Header />,
  children,
  footer = <Footer />
}) {
  return (
    <StyledLayout>
      <GlobalStyles />
      {header}
      <main>{children}</main>
      {footer}
    </StyledLayout>
  );
}
