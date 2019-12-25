import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { TiPlus } from "react-icons/ti";

const StyledFooter = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: var(--background-color);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 15px;
  border-top: 1px solid var(--color-silver);

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

export default function Footer() {
  return (
    <StyledFooter>
      <Link to="/">
        <TiPlus />
      </Link>
    </StyledFooter>
  );
}
