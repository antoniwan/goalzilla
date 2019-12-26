import React from "react";
import styled from "styled-components";
import { TiPlus, TiTimes } from "react-icons/ti";
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
  const { isOpen } = state.addEntryPanel;

  const handleAddEntryClick = function() {
    dispatch({
      type: isOpen ? "closeAddEntryPanel" : "openAddEntryPanel"
    });
  };

  const icon = isOpen ? <TiTimes /> : <TiPlus />;

  return (
    <StyledFooter>
      <Button icon={icon} handleClick={handleAddEntryClick}>
        <TiPlus />
      </Button>
    </StyledFooter>
  );
}
