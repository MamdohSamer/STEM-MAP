import { programs } from "../data.js";
export default function Programs() {
  return (
    <section id="programs" className="section alt">
      <h2>Three simulations, one community</h2>
      <div className="grid three">
        {programs.map((p) => (
          <article key={p.name} className="card">
            <h3>{p.name}</h3>
            <p className="sub">{p.title}</p>
            <p>{p.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
