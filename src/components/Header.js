import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { TiHomeOutline } from "react-icons/ti";

const StyledHeader = styled.header`
  background-color: var(--background-color);
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: inline-block;
    color: var(--color-black);
    font-size: 2.4rem;
    text-decoration: none;
    margin: 0;
    font-weight: bold;
    letter-spacing: 1px;
  }
  span {
    letter-spacing: 0.5px;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <TiHomeOutline />
      </Link>
    </StyledHeader>
  );
}
