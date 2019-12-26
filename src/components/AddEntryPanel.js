import React from "react";
import styled from "styled-components";
import { useStateValue } from "./AppState";
import AddEntryForm from "./AddEntryForm";

const StyledAddEntryPanel = styled.section`
  position: fixed;
  bottom: 50px;
  left: 0;
  width: 100%;
  transition: all 0.5s;
  padding: 15px;
  border-top: 1px solid var(--color-silver);
  background: var(--color-white);

  &.is-open {
    bottom: 50px;
    opacity: 1;
  }

  &.is-closed {
    bottom: -500px;
    opacity: 0;
  }
`;

export default function AddEntryPanel() {
  const [state] = useStateValue();
  const { panelIsOpen } = state.addEntry;
  return (
    <StyledAddEntryPanel className={panelIsOpen ? "is-open" : "is-closed"}>
      <h2>Add an entry</h2>
      <AddEntryForm />
    </StyledAddEntryPanel>
  );
}
