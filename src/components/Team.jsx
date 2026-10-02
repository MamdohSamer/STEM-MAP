import { leadership, members } from "../data.js";
import ContactCard from "./ContactCard.jsx";
export default function Team() {
  return (
    <section id="team" className="section">
      <h2>Our team</h2>
      <h3>Leadership</h3>
      <div className="grid three">
        {leadership.map((p) => <ContactCard key={p.email} {...p} />)}
      </div>
      <h3>Team members</h3>
      <div className="grid three">
        {members.map((p) => <ContactCard key={p.email} {...p} />)}
      </div>
    </section>
  );
}
