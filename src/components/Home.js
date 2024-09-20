import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './styles/home.css'; // Ensure you're linking the correct CSS file

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>WElCOME TO MY PORTFOLIO</h1>
          <p>Explore my projects and learn more about me!</p>
          {/* Add buttons or links to navigate to About and Projects pages */}
          <Link to="/about" className="cta-button">Learn About Me</Link>
        </div>
      </section>

      <section className="me-section">
        <h2>About Me</h2>
        <p>I,M a Proffesional Frontend Web developer and skill in networking field.</p>
        <Link to="/about" className="cta-button">Read More</Link>
      </section>
        <br></br>
      <section className="my-projects">
        <h2>My Projects</h2>
        <p>I have a number of projects, both individual projects and group projects..</p>
        <Link to="/projects" className="cta-button">View Projects</Link>
      </section>
    </div>
  );
}

export default Home;
