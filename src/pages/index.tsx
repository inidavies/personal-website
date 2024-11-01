import React from "react";
import Head from "next/head";
import { NamePage, Navigation } from "../components/NamePage";
import { SkillsPage } from "../components/SkillsPage";
import { AboutPage } from "../components/AboutPage";
import { ProjectsPage } from "../components/ProjectsPage";
import { SayHiPage } from "../components/SayHiPage";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div className="homePage">
      <Head>
        <title>Ini Davies</title>
      </Head>
      <Navigation />
      <NamePage />
      <AboutPage />
      <SkillsPage />
      <ProjectsPage />
      <SayHiPage />
    </div>
  );
}
