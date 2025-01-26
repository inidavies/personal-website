function SkillsPage() {
  return (
    <div id="skills" className="mypage alternate-page aboutAndSkills">
      <div id="skillSummary">
        <h2>my tech stack.</h2>
        <p>
          I am proficient in other technologies and tools such as Java, C++, SQL, MongoDB, Postman, Intellij, and Github CI/CD pipelines.
          I have experience working with the SDLC from conception to completion and work on robust and scalable web applications.
        </p>
      </div>
      <div id="skillList">
        {/*make this a iteration on a list */}
        <ul>
          <li className="item">
            <h2>Python</h2>
          </li>
          <li className="item">
            <h2>HTML</h2>
          </li>
          <li className="item">
            <h2>CSS</h2>
          </li>
          <li className="item">
            <h2>Typescript</h2>
          </li>
          <li className="item">
            <h2>React JS</h2>
          </li>
          <li className="item">
            <h2>React Native</h2>
          </li>
          <li className="item">
            <h2>Flask</h2>
          </li>
          <li className="item">
            <h2>Jinja</h2>
          </li>
          <li className="item">
            <h2>Figma</h2>
          </li>
        </ul>
      </div>
    </div>
  );
}
export { SkillsPage };
