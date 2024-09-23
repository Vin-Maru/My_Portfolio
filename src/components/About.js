import React from 'react';
import './styles/about.css'; // Import the CSS file
import myImage from "./assets/pics.jpg";
const About = () => {
  return (
    <section className="about-section">
      <div className="text-content">
        <h1>Vincent Kiprotich Maru</h1>
        <p>I am a results-driven Computer Science graduate with a solid specialization in Networking and a passion for frontend development. With extensive experience in building dynamic and responsive web applications using React, JavaScript, Bootstrap, HTML, CSS, and Tailwind CSS, I am committed to delivering exceptional user experiences.</p>
          <p>Additionally, my strong background in network administration and data management allows me to approach projects with both a technical and problem-solving mindset.</p>
             <p> I thrive in fast-paced environments where I can contribute to innovative solutions and continuously sharpen my skills. Whether it's optimizing web performance or configuring complex network infrastructures, I am eager to take on challenging roles that push the boundaries of technology.</p>
             <div className="documents">
            <h2> Find attached documents</h2>
            <p>Here you can view and download my Resume.</p>
              <ul>
              <li>
                  <a href="https://drive.google.com/file/d/1CiLpMJrYWhxQIbUToJE1dyaU-_l5CC1V/view?usp=sharing" download>Personal Resume</a>
                </li>
                <li>
                  <a  
                  href="https://drive.google.com/file/d/1CiLpMJrYWhxQIbUToJE1dyaU-_l5CC1V/view?usp=sharing"
                  download>Personal CV</a>
                </li>
              </ul>
            </div>
      </div>
      
            <div className="about-container">
            <div className='skills'>
              <h1>Skills</h1>
              <ul><h2>Frontend Development:</h2>
                <li>React.js (with React Router for navigation)</li>
                <li>JavaScript (ES6+) </li>
                <li>HTML5 & CSS3</li>
                <li>Bootstrap</li>
              </ul>
              <ul><h2>Backend Development</h2>
              <li>PHP</li>
              <li>Node.js</li>
              <li>Express.js (if you have used it in conjunction with Node.js)</li>
              </ul>
              <ul><h2>Database Management</h2>
              <li>MySQL</li>
              <li>SQL</li>
              <li>Database Design & Optimization</li>
              </ul>
              <ul><h2>Networking:</h2>
              <li>Network Configuration & Maintenance</li>
              <li>IT Security</li>
              <li>Network Management (switches, routers, firewalls)</li>
              </ul>
            </div>

          </div>
      <img src={myImage} alt="My profile" className="my-profile" />
    </section>
  );
};

export default About;
