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
        projectLink="https://github.com/inidavies/personal-website"
        projectContent={
                <>
                <h5><strong>Problem Statement</strong></h5>
                  <div id="pwProblemStatement">
                    <p className="pwPSContent">This project was created to showcase my skills in front-end development and UI/UX design, and list my projects.
                    On Figma, I determined the assets, color-scheme, and logo then created low and high-fidelity wireframes and mockups 
                    to visualize the design and user experience on various screen sizes. I then decided on my tech stack and began development.</p>

                    <p className="pwPSContent">My goal was to create a responsive, clean, intuitive, and easily navigable website, that clearly showcases my projects and skills.
                    This project is not static, I will continuously iterate on it to improve the design as my skills develop.</p>
                  </div>
                  <div
                  id="pwImages"
                  className="projectImages"
                  >
                        <div className="pwImage">
                          <h6 className = "imageHeading">Design System</h6>
                          <Image src="/images/personal-website/design-system.jpg"
                          alt="screenshot of the design system planning for my personal website"
                          width={0}
                          height={0} 
                          sizes="100vw"
                          id="pwdsImage"
                          className="smallerImage"/>
                        </div>
                        <div className="pwImage" style={{marginRight: "200px"}}>
                          <h6 className = "imageHeading">Mid-Fidelity Mockups</h6>
                          <img src="/images/personal-website/mid-fed.jpg" 
                          alt="screenshot of mockups of the my personal website" 
                          width={0}
                          height={0} 
                          sizes="100vw"
                          id="pwmfImage"
                          className="smallerImage"/>
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
        projectLink="https://scoutmasterapp.com/"
        projectContent={
                <>
                <h5><strong>Problem Statement</strong></h5>
                  <p> 
                      ScoutMaster was my senior year Computer Science Capstone project, created to be a free GPS mobile application 
                      for lovers of media! Ever wanted to visit where your favorite film or series was filmed?
                      ScoutMaster&apos;s intuitive design makes this possible with its easy access to the web&apos;s most comprehensive database 
                      of media filming locations + its ability to connect & communicate with like-minded pop-culture enthusiasts 
                      around the world! Users are able to &quot;scout&quot; the locations they have visited and it will appear on their profile.
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
                      Note: ScoutMaster has been non-operational since 2022 and we developed a new version of the mobile app from scratch. 
                      The website linked displays the app&apos;s older UI but The new version is not live and 
                      I&apos;m unable share the assets here for copyright reasons, but I&apos;m happy to discuss technical details.
                  </p>
                  <h5><strong>My Role</strong></h5>
                  <ul>
                      <li>Designed and developed the front-end of the mobile app using <strong>React Native</strong>, <strong>Typescript</strong>, and <strong>CSS</strong>.</li>
                      <li>Developed a mobile application compatible with both Android and IOS devices, with design and performance optimized for both operating systems</li>
                      <li>Collaborated with the back-end team to integrate the front-end with the back-end using <strong>RESTful APIs</strong>.</li>
                      <li>Conducted user testing and gathered feedback to improve the user experience.</li>
                  </ul>
                  
                  <div
                  id="smImages"
                  className="projectImages"
                  >
                    <div className="smImage">
                            <h6 className = "imageHeading">Tech Stack</h6>
                            <Image src="/images/scoutmaster/smtech.jpg"
                            alt="photo of the tech stack used in the ScoutMaster project, including React Native, Typescript, and CSS"
                            width={0}
                          height={0} 
                          sizes="100vw"
                          id="smtsImage" 
                          className="smallerImage"/>
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
        projectLink="https://github.com/EthanWillinger/GroceryTracker"
        projectContent={
          <>
          <h5><strong>Problem Statement</strong></h5>
            <p>
              The goal of this project is to reduce food waste and help the user save money. The idea is to implement a web application that: 
            </p>
            <ul>
              <li>Reads the barcode of grocery items and provides information on the products.</li>
              <li>Keeps an inventory of all the entered grocery items.</li>
              <li>Estimates the expiration date of each item in inventory.</li>
              <li>Notifies the user via email before their groceries expire.</li>
              
            </ul>
            <div
            className="gtImages projectImages"
                >
                  <div className="gtImage">
                          <h6 className = "imageHeading">Project Structure</h6>
                          <Image src="/images/grocery-tracker/gtsc.jpg"
                          alt="screenshot of the project structire for the grocery tracker project"
                          width={0}
                          height={0} 
                          sizes="100vw"
                          className="gtinnerImage smallerImage" />
                  </div>
                  <div className="gtImage">
                          <h6 className = "imageHeading">Log In Page</h6>
                          <Image src="/images/grocery-tracker/gtlogin.jpg"
                          alt="screenshot of the login page for the grocery tracker project"
                          width={0}
                          height={0} 
                          sizes="100vw"
                          className="gtinnerImage smallerImage" />
                  </div>
                              <div className="gtImage">
                          <h6 className = "imageHeading">Sign Up Page</h6>
                          <Image src="/images/grocery-tracker/gtsignup.jpg"
                          alt="screenshot of the sign up page for the grocery tracker project"
                          width={0}
                          height={0} 
                          sizes="100vw"
                          className="gtinnerImage smallerImage"  />
                  </div>
                  <div className="gtImage">
                            <h6 className="imageHeading">Grocery List Page</h6>
                          <Image src="/images/grocery-tracker/gthome.jpg"
                          alt="screenshot of the home page for the grocery tracker project"
                          width={0}
                          height={0} 
                          sizes="100vw"
                          className="gtinnerImage smallerImage"  />
                  </div>
                              <div className="gtImage">
                          <h6 className = "imageHeading">User Pantry Page</h6>
                          <Image src="/images/grocery-tracker/gtlist.jpg"
                          alt="screenshot of the pantry page for the grocery tracker project"
                          width={0}
                          height={0} 
                          sizes="100vw"
                          className="gtinnerImage smallerImage"  />
                  </div>
                  </div>
          </>
        }
      />
    </div>
  );
}
export { ProjectsPage };
