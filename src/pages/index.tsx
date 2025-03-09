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
      </Head>
        <Navigation />
        <div id="site">
          <AboutPage />
          <SkillsPage />
          <ProjectsPage />
          <SayHiPage />
      </div>
    </>
  );
}
export { Home };
