import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: inline-block;
  color: var(--color-black);
  font-size: 2rem;
  text-decoration: none;
  margin: 0;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  background: none;
  border: 0;
  padding: 5px 20px;
  text-align: center;
`;

export default function Button({ icon, text, handleClick }) {
  return (
    <StyledButton onClick={handleClick}>
      {!text && icon && <>{icon}</>}
      {text && <span>{text}</span>}
    </StyledButton>
  );
}
