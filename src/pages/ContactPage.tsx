/*ContactPage.tsx */

import "./ContactPage.css";
import BgImage from "../assets/contactform.avif";

export default function ContactPage() {
  return (
    <section className="contact-page">
      <div className="contact-bg">
        <img src={BgImage} alt="Soft desert texture background" />
      </div>

      <div className="contact-wrapper">
        <h1>Contact Me</h1>

        <form className="contact-form">
          <label>
            Name
            <input type="text" name="name" required />
          </label>

          <label>
            Email
            <input type="email" name="email" required />
          </label>

          <label>
            Message
            <textarea name="message" required />
          </label>

          <button type="submit" className="contact-submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
