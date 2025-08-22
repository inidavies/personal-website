import Image from "next/image";

function AboutPage() {
  return (
    <div id="about" className="mypage alternate-page aboutAndSkills">
      <div id="aboutPicContainer">
        <Image src="/images/aboutPic.jpg" height={530} width={700} id="aboutPic" alt="a picture of me" />
      </div>
      <div id="aboutText">
        <h2>a little about me.</h2>
        <p>
          I am a full stack developer, with a focus on
          <span className="fw-bold"> front-end development</span> and <span className="fw-bold">User Experience</span>, striving to create applications with intuitive, useable, and user-centric designs.
          
          Software development allows me to combine creativity with my interest in technology. My dream is to work where I can create.
        </p>
      </div>
    </div>
  );
}
export { AboutPage };
