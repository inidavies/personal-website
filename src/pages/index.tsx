import React, { useEffect, useState } from "react";
import Head from "next/head";
import { NamePage, Navigation } from "../components/NamePage";
import { SkillsPage } from "../components/SkillsPage";
import { AboutPage } from "../components/AboutPage";
import { ProjectsPage } from "../components/ProjectsPage";
import { SayHiPage } from "../components/SayHiPage";
import "bootstrap/dist/css/bootstrap.min.css";

export default function PersonalWebsite() {
  const pageHeight = 600;
  const [bgColor, setBgColor] = useState(false);

  useEffect(() => {
    const ScrollEvent = () => {
      setBgColor(
        (window.scrollY >= pageHeight && window.scrollY <= pageHeight * 3) ||
          (window.scrollY >= pageHeight * 4 && window.scrollY <= pageHeight * 5)
      );
    };
    window.addEventListener("scroll", ScrollEvent);
    return () => window.removeEventListener("scroll", ScrollEvent);
  }, []);

  useEffect(() => {
    console.log(window.scrollY, bgColor);
  }, [bgColor]);

  return (
    <div className={bgColor ? "alternateColor" : "mainColor"}>
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
