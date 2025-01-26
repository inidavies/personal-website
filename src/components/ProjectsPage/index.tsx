import React, {useState } from "react";
import { Project } from "./Project";

function ProjectsPage() {
  return (
    <div id="projects" className="mypage">
      <Project
        projectIndex={1}
        projectName={"PERSONAL WEBSITE"}
        projectSkills={["Web Design", "Front-end Development", "UI/UX Design"]}
        projectYear={"2024-2025"}
        projectTechStack={["HTML", "CSS", "REACT JS", "TYPESCRIPT", "FIGMA"]}
        projectContent={`This project.`}
      />

      <Project
        projectIndex={2}
        projectName={"SCOUTMASTER"}
        projectSkills={[
          "Mobile App Development",
          "Full-Stack Development",
          "UX Design",
        ]}
        projectYear={"2023-2024"}
        projectTechStack={["REACT NATIVE", "CSS", "TYPESCRIPT"]}
        projectContent={`This project.`}
      />
      
      <Project
        projectIndex={3}
        projectName={"GROCERY TRACKER WEBSITE"}
        projectSkills={["Web Design", "Full-Stack Development", "UI/UX Design"]}
        projectYear={"2023"}
        projectTechStack={["HTML", "CSS", "FLASK", "PYTHON", "JINJA", "FIGMA"]}
        projectContent={`This project.`}
      />
    </div>
  );
}
export { ProjectsPage };
