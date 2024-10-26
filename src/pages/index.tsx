import React from "react";
import Head from "next/head";
import { NamePage, Navigation } from "../components/NamePage";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ini Davies</title>
      </Head>
      <Navigation />
      <NamePage />
    </>
  );
}
