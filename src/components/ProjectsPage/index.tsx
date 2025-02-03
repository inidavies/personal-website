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
                <h5><b>Problem Statement</b></h5>
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
                          <h6><b>Design System</b></h6>
                          <Image src="/images/personal-website/design-system.jpg"
                          alt="screenshot of the design system planning for my personal website"
                          width={650}
                          height={600} />
                        </div>
                        <div style={{height:'850px', padding: "10px", marginRight: "200px"}}>
                          <h6><b>Mid-Fidelity Mockups</b></h6>
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
                <h5><b>Problem Statement</b></h5>
                  <p> 
                      ScoutMaster was my senior year Computer Science Capstone project, created to be a free GPS mobile application 
                      for lovers of media! Ever wanted to visit where your favorite film or series was filmed?
                      ScoutMaster’s intuitive design makes this possible with its easy access to the web’s most comprehensive database 
                      of media filming locations + its ability to connect & communicate with like-minded pop-culture enthusiasts 
                      around the world! Users are able to "scout" the locations they have visited and it will appear on their profile.
                      Our capstone sponsor and founder of ScoutMaster, Matthew Muhl, maintains an ever growing database 
                      of 1000+ filming locations for movies, shows, and music videos.
                  </p>
                  <p>
                      The motivation for the project was to collaborate 
                      on the re-launch of ScoutMaster using existing files & assets. 
                      My team consisted of 8 software engineers, with the aim to enhance the user experience with cleaner user interface 
                      and smoother performance, while maintaining the essential features that made the app so unique when it originally launched in 2020. 
                  </p>
                  <p>
                      Note: ScoutMaster has been non-operational since 2022 and we developed a new version of the mobile app from scratch. The new version is 
                      not live and I'm unable share the assets here for copyright reasons, but I'm happy to discuss technical details.
                  </p>
                  <h5><b>My Role</b></h5>
                  <ul>
                      <li>Designed and developed the front-end of the mobile app using <b>React Native</b>, <b>Typescript</b>, and <b>CSS</b>.</li>
                      <li>Developed a mobile application compatible with both Android and IOS devices, with design and performance optimized for both operating systems</li>
                      <li>Collaborated with the back-end team to integrate the front-end with the back-end using <b>RESTful APIs</b>.</li>
                      <li>Conducted user testing and gathered feedback to improve the user experience.</li>
                  </ul>
                  
                  <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    padding: "10px",                  
                  }}
                  >
                    <div style={{height:'850px', padding: "10px", marginRight: "50px"}}>
                            <h6 style={{textAlign:"center", fontWeight:"bold"}}>Tech Stack</h6>
                            <Image src="/images/personal-website/smtech.jpg"
                            alt="screenshot of the design system planning for my personal website"
                            width={900}
                            height={500} />
                    </div>
                  </div>
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
