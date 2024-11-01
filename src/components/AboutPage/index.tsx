import Image from "next/image";
import React from "react";

function AboutPage() {
  return (
    <div id="about" className="mypage alternate-page aboutAndSkills">
      <Image
        src="/images/profile.jpg"
        height={600}
        width={500}
        id="aboutPic"
        alt="a picture of me"
      />
      <div id="aboutText">
        <h2>a little about me</h2>
        <p>
          I am a BSc in Computer Science graduate from University of North
          Texas. I am a BSc in Computer Science graduate from University of
          North Texas. I am a BSc in Computer Science graduate from University
          of North Texas. I am a BSc in Computer Science graduate from
          University of North Texas. I am a BSc in Computer Science graduate
          from University of North Texas. I am a BSc in Computer Science
          graduate from University of North Texas
        </p>
      </div>
    </div>
  );
}
export { AboutPage };
