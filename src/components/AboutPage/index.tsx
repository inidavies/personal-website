import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useEffect, useState } from "react";

function AboutPage() {
  const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
      setHasMounted(true);
    }, []);
  
  return (
    <div id="aboutAndSkills" className="mypage alternate-page aboutAndSkills">
      <div id="about">

        <div id="aboutHeader">

          <div id="aboutPicContainer">
            <img src="/images/aboutPic.jpg" id="aboutPic" alt="a picture of me" />
          </div>   
                    
          {hasMounted ? (
            <div id="aboutLinks">
              <div id="socialLinks">              
                <a
                href="https://www.linkedin.com/in/inioluwadavies/"
                target="_blank"
                rel="noopener noreferrer"
                id="linkedin"
                className="contactLink"
              >
                <FontAwesomeIcon
                  className="contactIcon"
                  icon={["fab", "linkedin"]}
                />
              </a>
              <a
                href="https://github.com/inidavies"
                id="github"
                target="_blank"
                rel="noopener noreferrer"
                className="contactLink"
              >
                <FontAwesomeIcon className="contactIcon" icon={["fab", "github"]} />
              </a>
              <a
                href="mailto: inioluwad03@gmail.com"
                id="email"
                target="_blank"
                rel="noopener noreferrer"
                className="contactLink"
              >
                <FontAwesomeIcon
                  className="contactIcon"
                  icon={["fas", "envelope"]}
                />
              </a>
              </div>
              <div id="resumeLink">
              <a
                href="mailto: inioluwad03@gmail.com"
                id="resume"
                target="_blank"
                rel="noopener noreferrer"
                className="contactLink"
              >
                <FontAwesomeIcon
                  className="contactIcon"
                  icon={["fas", "paperclip"]}
                />
                <p>my resume</p>
              </a>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div id="aboutText">
          <p>
            I am a full stack developer, with a focus on
            <span className="fw-bold"> front-end development</span> and <span className="fw-bold">User Experience</span>, striving to create applications with intuitive, useable, and user-centric designs.
            
            Software development allows me to combine creativity with my interest in technology. My dream is to work where I can create.
          </p>
        </div>
      </div>
      </div>
  );
}
export { AboutPage };
