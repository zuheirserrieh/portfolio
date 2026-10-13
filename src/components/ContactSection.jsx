import { cvUrl, profile } from "./data";

function ContactSection() {
  return (
    <section className="section container" id="contact">
      <div className="contact-card">
        <p className="eyebrow">Contact</p>
        <h2>Hiring, or have a project in mind?</h2>
        <p className="section-copy">
          I&apos;m open to full-stack roles and freelance work. Email is the fastest way to reach me.
        </p>
        <a className="contact-card__email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <div className="hero__actions">
          <a className="button button--primary" href={`mailto:${profile.email}`}>
            Email me
          </a>
          <a className="button button--ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="button button--ghost" href={profile.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a className="button button--ghost" href={cvUrl} target="_blank" rel="noreferrer">
            CV (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
