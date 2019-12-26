import React from "react";
import styled from "styled-components";
import { TiPlus } from "react-icons/ti";
import { useStateValue } from "./AppState";
import Button from "./Button";

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
`;

export default function Footer() {
  const [state, dispatch] = useStateValue();

  const handleAddEntryClick = function() {
    console.log("add entry!");
  };

  return (
    <StyledFooter>
      <Button icon={<TiPlus />} handleClick={handleAddEntryClick}>
        <TiPlus />
      </Button>
    </StyledFooter>
  );
}
