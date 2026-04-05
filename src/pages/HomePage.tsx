/*HomePage.tsx*/

import Profile from "../assets/profile.jpg";
import "./HomePage.css";

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
        </div>
      </div>
    </section>
  );
}
