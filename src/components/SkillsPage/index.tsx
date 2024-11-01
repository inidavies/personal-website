function SkillsPage() {
  return (
    <div id="skills" className="mypage alternate-page">
      <div>
        <h2>my tech stack</h2>
        <p>
          I am a BSc in Computer Science graduate from University of North
          Texas. I am a BSc in Computer Science graduate from University of
          North Texas. I am a BSc in Computer Science graduate from University
          of North Texas.
        </p>
      </div>
      <div>
        {/*make this a iteration on a list */}
        <ul>
          <li>
            <h2>Python</h2>
          </li>
          <li>
            <h2>HTML</h2>
          </li>
          <li>
            <h2>TailwindCSS</h2>
          </li>
          <li>
            <h2>JavaScript</h2>
          </li>
          <li>
            <h2>React JS</h2>
          </li>
          <li>
            <h2>React Native</h2>
          </li>
          <li>
            <h2>Flask</h2>
          </li>
          <li>
            <h2>Jinja</h2>
          </li>
          <li>
            <h2>Figma</h2>
          </li>
        </ul>
      </div>
    </div>
  );
}
export { SkillsPage };
