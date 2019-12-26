import React from "react";
import styled from "styled-components";
import { useStateValue } from "../components/AppState";
import Layout from "../components/Layout";
import EntryList from "../components/EntryList";

const StyledDashboard = styled.div``;

export default function Dashboard() {
  const [state] = useStateValue();
  const { entries } = state;
  return (
    <Layout>
      <StyledDashboard>
        <EntryList entries={entries} />
      </StyledDashboard>
    </Layout>
  );
}
