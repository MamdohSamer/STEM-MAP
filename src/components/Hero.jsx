import Logo from "./Logo.jsx";
export default function Hero() {
  return (
    <section id="top" className="hero">
      <Logo size={180} />
      <h1>Multilateral Affairs Platform</h1>
      <p className="motto">Learn. Discuss. Create change.</p>
      <p className="pillars">Legislation · Discourse · Empowerment</p>
      <p className="lede">A student-led club for global dialogue, diplomacy, and a better tomorrow.</p>
      <div className="actions">
        <a className="btn" href="#contact">Join the club</a>
        <a className="btn ghost" href="#programs">See our programs</a>
      </div>
      <p className="tagline">Different people. One vision.</p>
    </section>
  );
}
