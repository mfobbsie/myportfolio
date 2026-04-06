/*HomePage.tsx*/

import Profile from "../assets/profile.jpg";
import "./HomePage.css";
import {Link} from "react-router-dom";

export default function HomePage() {
  return (
    <section className="home">
      <div className="home-inner">
        <div className="home-image">
          <img
            src={Profile}
            alt="Profile picture of Mary Fobbs-Guillory"
            className="profile-img"
          />
        </div>

        <div className="home-text">
          <h1>full-stack developer</h1>
          <p>
            Junior software engineer with a curious mind, a growing toolkit, and
            a habit of wandering barefoot through the grass when inspiration
            strikes.
          </p>

          <Link to="/about" className="learn-more-link">
            Learn more about what I can do for you →
          </Link>
        </div>
      </div>
    </section>
  );
}
