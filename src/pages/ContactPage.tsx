/* ContactPage.tsx */

import { useState } from "react";
import "./ContactPage.css";
import BgImage from "../assets/contactform.avif";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const googleFormData = new FormData();
    googleFormData.append("entry.2005620554", formData.get("name") as string);
    googleFormData.append("entry.1045781291", formData.get("email") as string);
    googleFormData.append("entry.839337160", formData.get("message") as string);

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSfcKuay8q3vZnjdcTbR5Mq-Ak2A5P1_rpUXVawp86yJZRSFKg/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          body: googleFormData,
        },
      );

      setStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="contact-page">
      <div className="contact-bg">
        <img src={BgImage} alt="Soft desert texture background" />
      </div>

      <div className="contact-wrapper">
        <h1>Contact Me</h1>

        {status === "success" && (
          <p className="contact-success">
            Thank you! Your message has been sent.
          </p>
        )}

        {status === "error" && (
          <p className="contact-error">
            Something went wrong. Please try again.
          </p>
        )}

        <form className="contact-form" name="contact" onSubmit={handleSubmit}>
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
