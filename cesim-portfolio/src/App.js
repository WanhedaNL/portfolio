import './App.css';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Youw message has been sent! I will get back to you as soon as possible.");
  };

  return (
    <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
/>,
    <section id="contact">

      <div className="contact-form">
        <h2>CONTACT</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="fname">First Name</label>
            <input type="text" name="firstname" id="fname" placeholder="Type your name" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="message">Your message</label>
            <textarea id="message" name="message" required placeholder="Typ..."></textarea>
          </div>
          <input className="submit-btn" type="submit" value="Submit" />
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
  return (
    <div className="App">
      <header>
        <div className="top-bar">
          <nav>
            <ul>
              <li><a href="#" className="active">HOME</a></li>
              <li><a href="#">ABOUT</a></li>
              <li><a href="#">PROJECTS</a></li>
              <li><a href="#">BLOG</a></li>
              <li><a href="#">CONTACT</a></li>
            </ul>
          </nav>
        </div>
        <div className="hero-content hero-text">
          <div className="hero-left-text">
            <h1 id="hello-topbar">Hello</h1>
            <h1 id="name-topbar">I'm Cesim</h1>
          </div>
        </div>
      </header>

      <main>
        <div className="content-wrapper">
          <section id="about">
            <article className="about-text-content">
              <p>Wat mij typeert als developer is mijn nieuwsgierigheid en mijn motivatie om continu nieuwe technologieën en programmeertalen te leren.
                 Ik werk graag aan projecten waarin ik mezelf kan ontwikkelen en mijn vaardigheden kan verbeteren.</p>
            </article>
          </section>

          <hr className="line" />

          <section className="skills-content">
            <h1>Skills</h1>
            <article className="skills">
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
              <div className="project-card">
                 <h3>Title project-1</h3>
                 <p>about app</p>
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