import React, { useState } from "react";

interface projectProps {
  projectIndex: number;
  projectName: string;
  projectSkills: string;
  projectYear: string;
  projectTechStack: string[];
  projectContent: string;
}
function Project1(props: projectProps) {
  const [name, setName] = useState(props.projectName);
  const [skills, setSkills] = useState(props.projectSkills);
  const [year, setYear] = useState(props.projectYear);
  const [techStack, setTechStack] = useState(props.projectTechStack);
  const [index, setIndex] = useState(props.projectIndex);
  const [content, setContent] = useState(props.projectContent);

  const checkEven = (num: number) => {
    return num % 2 == 0;
  };

  const checkIsFirst = (num: number) => {
    return num == 1;
  };

  const RenderProjects = () => {
    return techStack.map((item: any, index: number) => {
      console.log(index, techStack.length);
      if (index + 1 - techStack.length == 0) {
        return (
          <>
            <p>{item}</p>
          </>
        );
      }
      return (
        <>
          <p>{item}</p>
          <div className="separator">&#x2022;</div>
        </>
      );
    });
  };

  return (
    <div className="project">
      <a
        className={`projectCard 
            ${checkEven(index) ? "evenproject" : "oddproject"}
            ${checkIsFirst(index) ? "" : "layeredcards"}`}
        id={`project${index}`}
        href={`/#project${index}`}
      >
        <div className="projectHeading">
          <div className={"leftheading"}>
            <div>
              <h1>{name}</h1>
            </div>
            <div className={"skillsused"}>
              <p>Web Design </p>
              <div className="separator">&#x2022;</div>
              <p> Full-Stack Development </p>
              <div className="separator">&#x2022;</div>
              <p> UX Design</p>
            </div>
          </div>
          <div className={"rightheading"}>
            <div className={"year"}>
              <p>2024</p>
            </div>
            <div className={"techstack"}>{RenderProjects()}</div>
          </div>
        </div>
        <p>{content}</p>
      </a>
    </div>
  );
}
export { Project1 };
