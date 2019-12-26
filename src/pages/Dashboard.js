import React from "react";
import { useStateValue } from "../components/AppState";
import Layout from "../components/Layout";

export default function Dashboard() {
  const [state] = useStateValue();

  console.log(`State Info`, state);
  return <Layout>dashboard</Layout>;
}
