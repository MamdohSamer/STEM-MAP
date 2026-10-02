export default function ContactCard({ name, role, phone, email }) {
  return (
    <article className="card person">
      <h3 dir="auto">{name}</h3>
      {role && <p className="sub">{role}</p>}
      <p><a href={`tel:${phone}`}>{phone}</a></p>
      <p><a href={`mailto:${email}`}>{email}</a></p>
    </article>
  );
}
