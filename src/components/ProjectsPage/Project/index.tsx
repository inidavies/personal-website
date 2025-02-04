import React from "react";

interface projectProps {
  projectIndex: number;
  projectName: string;
  projectSkills: string[];
  projectYear: string;
  projectTechStack: string[];
  projectContent: React.JSX.Element;
  projectLink: string;
}
function Project(props: projectProps) {
  const name = props.projectName;
  const skills = props.projectSkills
  const year = props.projectYear;
  const techStack = props.projectTechStack;
  const index = props.projectIndex;
  const content = props.projectContent;
  const link = props.projectLink;

  function expand(e: React.MouseEvent) {
    e.preventDefault();
    e.currentTarget.classList.toggle("clicked");
  }

  const checkEven = (num: number) => {
    return num % 2 == 0;
  };

  const checkIsFirst = (num: number) => {
    return num == 1;
  };

  const RenderSkills = () => {
    return skills.map((item: string, index: number) => {
      if (index + 1 - skills.length == 0) {
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

  const RenderTechStack = () => {
    return techStack.map((item: string, index: number) => {
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
            ${checkIsFirst(index) ? "" : "layeredcards"}`
          }
        id={`project${index}`}
        onClick={(e) => expand(e)}
      >
        <div className="projectHeading">
          
          <div className={"leftheading"}>
            <div>
              <h1>{name}</h1>
            </div>
            <div className={"skillsused"}>{RenderSkills()}</div>
          </div>

          <div className={"rightheading"}>
            <div className={"year"}>
              <a 
              href={link ? link : "#"}
              target="_blank"
              rel="noopener noreferrer">
                {year}
              </a>
            </div>
            <div className={"techstack"}>{RenderTechStack()}</div>
          </div>
          
        </div>
        <div className="projectContent" >{content}</div>
      </a>
    </div>
  );
}
export { Project };
