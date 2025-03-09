import React from "react";
import Head from "next/head";
import { NamePage, Navigation } from "../components/NamePage";
import { SkillsPage } from "../components/SkillsPage";
import { AboutPage } from "../components/AboutPage";
import { ProjectsPage } from "../components/ProjectsPage";
import { SayHiPage } from "../components/SayHiPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ini Davies</title>
        <meta name="description" content="Ini Davies Portfolio" />
        <link rel="icon" href="/profile.jpg" />
        <link
          rel="preload"
          href="/fonts/Satoshi/Satoshi-Light.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        ></link>
        <link
          rel="preload"
          href="/fonts/Satoshi/Satoshi-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        ></link>
        <link
          rel="preload"
          href="/profile.jpg"
          as="image"
          type="image/jpeg"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <Navigation />
      <NamePage />
      <AboutPage />
      <SkillsPage />
      <ProjectsPage />
      <SayHiPage />
    </>
  );
}
export { Home };
