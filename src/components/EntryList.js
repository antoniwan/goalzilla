import React from "react";
import styled from "styled-components";
import Entry from "./Entry";

const StyledEntryList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export default function EntryList({ entries = [] }) {
  return (
    <StyledEntryList>
      {entries.map(entry => (
        <Entry key={entry.id} {...entry} />
      ))}
    </StyledEntryList>
  );
}
