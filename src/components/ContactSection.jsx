function ContactSection() {
  return (
    <section className="section" id="contact">
      <div className="section__heading">
        <p className="eyebrow">Contact</p>
        <h2>Get in touch</h2>
      </div>
      <div className="contact-card">
        <div>
          <p>
            Share your project idea, timeline, and budget, and I will get back to you as soon as possible.
          </p>
          <div className="contact-details">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=zuheir.serrieh@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              zuheir.serrieh@gmail.com
            </a>
            <a href="https://wa.me/96171092179" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
        <div className="contact-actions">
          <a
            className="cta-link"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=zuheir.serrieh@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Send Email
          </a>
          <a className="cta-link" href="#top">
            Back to top
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
