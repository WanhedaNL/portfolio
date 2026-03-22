import './App.css';
import { useEffect } from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { initScroll } from "./scroll.js";
const Contact = () => {
 

 return (

  <section id="contact">

      <div className="contact-form hidden">
        <h2>CONTACT</h2>

       <form action="https://formspree.io/f/xjgadvpy" method="POST">
  <input type="hidden" name="_next" value="./App.js" />

  <div className="input-group">
    <label htmlFor="fname">First Name</label>
    <input
      type="text"
      name="firstname"
      id="fname"
      placeholder="Type your name"
      required
    />
  </div>

  <div className="input-group">
    <label htmlFor="email">Email</label>
    <input
      type="email"
      name="email"
      id="email"
      required
    />
  </div>

  <div className="input-group">
    <label htmlFor="message">Your message</label>
    <textarea
      id="message"
      name="message"
      required
      placeholder="Type..."
    ></textarea>
  </div>

  <button type="submit" className="submit-btn">
    Submit
  </button>
</form>



        
        <div className="social-contacts">
          <ul>
             <li><a href="https://www.instagram.com/"><FaInstagram /></a></li>
            <li><a href="https://www.linkedin.com/"><FaLinkedin /></a></li>
            <li><a href="https://github.com/WanhedaNL"><FaGithub /></a></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

function App() {
  useEffect(() => {
    initScroll();
  }, []);

  return (
    
    <div className="App">
      <header>
        <div className="top-bar">
          <nav>
            <ul>
              <li ><a href="#" >HOME</a></li>
              <li><a href="#">ABOUT</a></li>
              <li><a href="#">PROJECTS</a></li>
              <li><a href="#">BLOG</a></li>
              <li><a href="#">CONTACT</a></li>
            </ul>
          </nav>
        </div>
        <div className="hero-content hero-text">
          <div className="hero-left-text">
            <h1 id="hello-topbar">Hallo</h1>
            <h1 id="name-topbar">Ik ben Cesim</h1>
          </div>
        </div>
      </header>

      <main>
        <div className="content-wrapper">
          <section id="about">
            <article className="about-text-content">
              <p>Wat mij typeert als developer is mijn nieuwsgierigheid en mijn sterke motivatie om continu nieuwe technologieën en programmeertalen te leren. Ik werk graag aan projecten waarin ik mezelf kan blijven ontwikkelen en mijn vaardigheden verder kan verbeteren.</p>
            </article>
          </section>

          <hr className="line" />

          <section className="skills-content">
            <h1>Skills</h1>
            <article className="skills hidden">
              <ul>
                <li>HTML (BASIC)</li>
                <li>CSS (BASIC)</li>
                <li>JAVASCRIPT (BASIC)</li>
                <li>PHP (BASIC)</li>
              </ul>
            </article>
          </section>

          <section id="projects">
            <div className="projects-grid">


              <div className="project-card hidden" >
                  <h3>Car Dashboard</h3>
                   <a 
                        href="https://github.com/WanhedaNL/car-dashboard" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="github-link"
  >
                           View on GitHub
                    </a>

  <p>A full-stack car dashboard web application with admin panel and authentication system.</p>
              </div>


              <div className="project-card hidden">
                <h3>Digital Signage</h3>
                                    <a 
                        href="https://github.com/WanhedaNL/car-dashboard" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="github-link"
  >
                           View on GitHub
                    </a>
                     <p>
                      A digital signage (narrowcasting) web application for displaying real-time updates, images, and information on public screens.
                        </p>
              </div>



              
              
            </div>
          </section>

         
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;