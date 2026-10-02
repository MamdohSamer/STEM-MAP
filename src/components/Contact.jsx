import { useState } from "react";
import { leadership } from "../data.js";

export default function Contact() {
  const [f, setF] = useState({ name: "", message: "" });
  const founder = leadership[0].email;
  const href = `mailto:${founder}?subject=${encodeURIComponent("Joining STEM MAP")}&body=${encodeURIComponent(`${f.message}\n\n${f.name}`)}`;
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  return (
    <section id="contact" className="section alt">
      <h2>Contact us</h2>
      <p className="wide">Want to join or partner with us? Write your message and it opens in your email app, addressed to our founder.</p>
      <div className="formbox">
        <label>Your name<input value={f.name} onChange={set("name")} /></label>
        <label>Message<textarea rows="4" value={f.message} onChange={set("message")} /></label>
        <a className="btn" href={href}>Send email</a>
      </div>
    </section>
  );
}
