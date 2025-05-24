function SkillsPage() {
  const skillList = ["Python", "HTML", "CSS", "Typescript", "React JS", "React Native", "Flask", "Jinja", "Figma"];
  return (
    <div id="skills" className="mypage alternate-page aboutAndSkills">
      <div id="skillSummary">
        <h2>my tech stack.</h2>
        <p>
          I am proficient in other technologies and tools such as <span className="fw-bold">Java</span>, <span className="fw-bold">Springboot</span>, <span className="fw-bold">C++</span>, <span className="fw-bold">SQL</span>, MongoDB, Postman, Intellij, and <span className="fw-bold">CI/CD pipelines</span>.
          I have experience working with the SDLC from conception to completion and work on robust and scalable web applications.
        </p>
      </div>
      <div id="skillList">
        <ul>
        {skillList.map((skill) => {
          return (
          <li key={skill} className="item">
            <h2>{skill}</h2>
          </li>)
        })}
        </ul>
      </div>
    </div>
  );
}
export { SkillsPage };
