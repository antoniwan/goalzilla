import React from "react";
import styled from "styled-components";
import { useStateValue } from "./AppState";

const StyledAddEntryPanel = styled.section`
  position: fixed;
  bottom: 50px;
  left: 0;
  background-color: pink;
  width: 100%;
  transition: all 0.5s;

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
  const { isOpen } = state.addEntryPanel;
  return (
    <StyledAddEntryPanel className={isOpen ? "is-open" : "is-closed"}>
      <h2>Add Entry</h2>
      <ul>
        <li>add a countdown</li>
        <li>add a counter</li>
      </ul>
    </StyledAddEntryPanel>
  );
}
