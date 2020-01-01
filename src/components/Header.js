import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--background-color);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 15px;
  border-bottom: 2px solid var(--color-silver);

  ul,
  li {
    margin: 0;
    padding: 0;
  }

  ul {
    display: flex;

    li {
      margin-left: 1rem;

      &:first-child {
        margin-left: 0;
      }
    }
  }

  a {
    display: inline-block;
    color: var(--color-black);
    font-size: 0.8rem;
    text-decoration: none;
    margin: 0;
    font-weight: 100;
    letter-spacing: 1px;
  }
  span {
    letter-spacing: 0.5px;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <strong>All</strong>
            </Link>
          </li>
          <li>
            <Link to="/">Counters</Link>
          </li>
          <li>
            <Link to="/">Countdowns</Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
}
