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
        <link rel="icon" href="images/profile.jpg" />
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
          rel="prefetch"
          href="images/profile.jpg"
          as="image"
          type="image/jpeg"
          crossOrigin="anonymous"
        ></link>
        <link rel="preload" 
        href="https://embed.figma.com/design/mEeVQ6cfpGXO0e57ezC59z/Portfolio-Website?node-id=10-9&embed-host=share" 
        as="document" />
        <link rel="preload" 
        href="https://embed.figma.com/design/mEeVQ6cfpGXO0e57ezC59z/Portfolio-Website?node-id=10-9&embed-host=sharehttps://embed.figma.com/slides/DcEP6Pnq7LOLutLxwjvz7T/Scoutmaster-Mobile-Screens?node-id=1-856&embed-host=share" 
        as="document" />
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
