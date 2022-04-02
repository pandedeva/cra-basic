import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact";
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">Contact</h1>
      <p className="section-description">kamu dapat menghubungiku di bawah ini</p>
      <ul>
        <li>WA: 08123445566</li>
        <li>Email: devapande66@gmail.com</li>
      </ul>
      <p className="section-description">Atau ingin melihatku pansos di medsos</p>
      <ul>
        <li>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            Facebook
          </a>
        </li>
        <li>
          <a href="https://twitter.com/devskke" target="_blank" rel="noreferrer">
            Twitter
          </a>
        </li>
      </ul>
    </section>
  );
}
