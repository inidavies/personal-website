function SkillsPage() {
  return (
    <div id="skills" className="mypage alternate-page aboutAndSkills">
      <div id="skillSummary">
        <h2>my tech stack</h2>
        <p>
          I am a BSc in Computer Science graduate from University of North
          Texas. I am a BSc in Computer Science graduate from University of
          North Texas. I am a BSc in Computer Science graduate from University
          of North Texas.
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
            <h2>TailwindCSS</h2>
          </li>
          <li className="item">
            <h2>JavaScript</h2>
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
