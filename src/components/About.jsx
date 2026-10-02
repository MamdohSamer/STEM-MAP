import { skills } from "../data.js";
export default function About() {
  return (
    <section id="about" className="section">
      <h2>About us</h2>
      <p className="wide">
        STEM MAP (STEM Multilateral Affairs Platform) is a student-led 3-in-1 platform that
        combines three simulation experiences in one community. More than a club, we are a global family
        that believes together we build brighter futures.
      </p>
      <h3>What you will build</h3>
      <ul className="chips">
        {skills.map((s) => <li key={s}>{s}</li>)}
      </ul>
    </section>
  );
}
