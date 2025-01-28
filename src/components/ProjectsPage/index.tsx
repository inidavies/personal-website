import React from "react";
import Image from "next/image";
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
        projectContent={
                <>
                                  <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    padding: "10px",
                  }}
                  >
                  <p 
                  style={{width: '50%', height: '100px'}}
                  >This project was created to showcase my skills in front-end development and UI/UX design, and list my projects.
                  On Figma, I determined the assets, color-scheme, and logo then created low and high-fidelity wireframes and mockups 
                  to visualize the design and user experience on various screen sizes. I then decided on my tech stack and began development.</p>

                  <p
                  style={{width: '50%', height: '100px'}}
                  >My goal was to create a responsive, clean, intuitive, and easily navigable website, that clearly showcases my projects and skills.
                  This project is not static, I will continuously iterate on it to improve the design as my skills develop.</p>
                  </div>
                  <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    padding: "10px",                  
                  }}
                  >
                        <div style={{height:'850px', padding: "10px", marginRight: "50px"}}>
                          <h6>Design System</h6>
                          <Image src="/images/personal-website/design-system.jpg"
                          alt="screenshot of the design system planning for my personal website"
                          width={650}
                          height={600} />
                        </div>
                        <div style={{height:'850px', padding: "10px", marginRight: "200px"}}>
                          <h6>Mid-Fidelity Mockups</h6>
                          <img src="/images/personal-website/mid-fed.jpg" 
                          alt="screenshot of mockups of the my personal website" 
                          width={500}
                          height={800}/>
                        </div>
                      </div>   
                </>
          }
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
        projectContent={
                <>
                  <p>ScoutMaster is a mobile application that helps scout leaders and parents manage their scouts' activities, 
                  track their progress, and communicate with each other. The app allows users to create and manage events, 
                  track attendance, and send notifications to members. It also includes a chat feature for members to communicate 
                  with each other and share photos and videos
                  </p>
                </>
        }
      />
      
      <Project
        projectIndex={3}
        projectName={"GROCERY TRACKER"}
        projectSkills={["Web Design", "Full-Stack Development", "UI/UX Design"]}
        projectYear={"2023"}
        projectTechStack={["HTML", "CSS", "FLASK", "PYTHON", "JINJA", "FIGMA"]}
        projectContent={
          <>
            <p>Grocery Tracker is a web application that helps users track their grocery spending and manage their shopping lists.
            Users can create an account, add items to their shopping list, and track their spending. The app also provides 
            analytics on their spending habits and suggests ways to save money on groceries.
            </p>
          </>
        }
      />
    </div>
  );
}
export { ProjectsPage };
