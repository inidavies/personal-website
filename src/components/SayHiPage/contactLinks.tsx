import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Location from "./location";
import React from "react";
import { useEffect, useState } from "react";

export default function contactLinks() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <div id="contactRight">
      <h3>find me @</h3>
      {hasMounted ? (
        <>
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
            <p>linkedin</p>
          </a>
          <a
            href="https://github.com/inidavies"
            id="github"
            target="_blank"
            rel="noopener noreferrer"
            className="contactLink"
          >
            <FontAwesomeIcon className="contactIcon" icon={["fab", "github"]} />
            <p>github</p>
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
            <p>email</p>
          </a>
        </>
      ) : (
        <></>
      )}

      <Location />
    </div>
  );
}
