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
        <link
          rel="preload"
          href="../../public/fonts/ClashDisplay/ClashDisplay-Variable.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="../../public/fonts/ClashDisplay/ClashDisplay-Extralight.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="../../public/fonts/ClashDisplay/ClashDisplay-Light.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="../../public/fonts/Satoshi/Satoshi-Variable.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="../../public/fonts/Satoshi/Satoshi-Light.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="../../public/fonts/Satoshi/Satoshi-Medium.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="../../public/fonts/Satoshi/Satoshi-Regular.woff2"
          as="font"
          type="font/woff2"
        />

        <link
          rel="preload"
          href="../../public/fonts/Zodiak/Zodiak-Bold.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="../../public/fonts/Zodiak/Zodiak-Regular.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="../../public/fonts/Zodiak/Zodiak-Light.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="../../public/fonts/Zodiak/Zodiak-Thin.woff2"
          as="font"
          type="font/woff2"
        />
        <link rel="stylesheet" href="../../public/styles/global.css" />
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
