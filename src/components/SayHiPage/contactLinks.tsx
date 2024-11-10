import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Location from "./location";
import React from "react";

export default function contactLinks() {
  return (
    <div id="contactRight">
      <h3>find me @</h3>
      <a href="#myname" id="linkedin" className="contactLink">
        <FontAwesomeIcon className="contactIcon" icon={["fab", "linkedin"]} />
        <p>linkedin</p>
      </a>
      <a href="#myname" id="github" className="contactLink">
        <FontAwesomeIcon className="contactIcon" icon={["fab", "github"]} />
        <p>github</p>
      </a>
      <a href="#myname" id="email" className="contactLink">
        <FontAwesomeIcon className="contactIcon" icon={["fas", "envelope"]} />
        <p>email</p>
      </a>
      <Location />
    </div>
  );
}
