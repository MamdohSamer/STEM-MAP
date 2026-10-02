import Logo from "./Logo.jsx";
const links = ["About", "Programs", "Team", "Contact"];
export default function Header() {
  return (
    <header className="header">
      <a className="brand" href="#top"><Logo /><span>STEM MAP</span></a>
      <nav aria-label="Main">
        {links.map((l) => <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>)}
      </nav>
    </header>
  );
}
