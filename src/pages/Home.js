import React from "react";
import { useStateValue } from "../components/AppState";
import Layout from "../components/Layout";

export default function Home() {
  const [state, dispatch] = useStateValue();

  console.log(state);
  return <Layout>home</Layout>;
}
