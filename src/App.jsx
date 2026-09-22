import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="portfolio">
      {/* Navbar */}
      <nav className="navbar">
  <div className="logo">TM<span>.</span></div>

  <div className="nav-links">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#services">Services</a>
    <a href="#contact">Contact</a>
  </div>

  <button
  className="mobile-menu-btn"
  aria-label="Toggle navigation"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? "✕" : "☰"}
</button>
{menuOpen && (
  <div className="mobile-menu">
    <a href="#home" onClick={() => setMenuOpen(false)}>
      Home
    </a>

    <a href="#about" onClick={() => setMenuOpen(false)}>
      About
    </a>

    <a href="#projects" onClick={() => setMenuOpen(false)}>
      Projects
    </a>

    <a href="#services" onClick={() => setMenuOpen(false)}>
      Services
    </a>

    <a href="#contact" onClick={() => setMenuOpen(false)}>
      Contact
    </a>
  </div>
)}
</nav>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">FULL STACK DEVELOPER</p>

          <h1>
            I build <span>modern websites</span>
            <br />
            for businesses & startups.
          </h1>

          <p className="hero-description">
            I create fast, responsive and user-friendly web experiences
            using modern technologies.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="primary-btn">
              Start a Project →
            </a>

            <a href="#projects" className="secondary-btn">
              View My Work
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="code-window">
            <div className="window-top">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <pre>
            {`const developer = {
              name: "Tarun Mewada",
              role: "Full Stack Developer",
              skills: [
                "React",
                  "Node.js",
                  "Express",
                  "MongoDB"
              ],
                      available: true
            };`}
            </pre>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section" id="about">
        <p className="section-label">ABOUT ME</p>

        <h2>Turning ideas into digital experiences.</h2>

        <p className="section-text">
           I'm Tarun Mewada, a Full Stack Developer focused on building
          clean, responsive and practical web applications. I enjoy
          turning ideas into real-world digital products using modern
          web technologies.
        </p>

        <div className="skills">
          <span>React</span>
          <span>JavaScript</span>
          <span>Node.js</span>
          <span>Express</span>
          <span>MongoDB</span>
          <span>Git</span>
        </div>
      </section>

      {/* Projects */}
      <section className="section projects" id="projects">
  <p className="section-label">MY WORK</p>

  <h2>Featured Projects</h2>

  <p className="section-text">
    A selection of projects that showcase my skills in frontend,
    backend and full-stack web development.
  </p>

  <div className="project-grid">

    <div className="project-card">
      <div className="project-number">01</div>

      <h3>ClassMind-AI</h3>

      <p>
        An AI-powered educational platform designed to provide
        smarter learning experiences for students and teachers.
      </p>

      <div className="project-tech">
        <span>React</span>
        <span>Node.js</span>
        <span>MongoDB</span>
      </div>

      <div className="project-links">
        <a
          href="https://github.com/TarunMewada01"
          target="_blank"
          rel="noreferrer"
        >
          GitHub →
        </a>
      </div>
    </div>


    <div className="project-card">
      <div className="project-number">02</div>

      <h3>Restaurant Website</h3>

      <p>
        A responsive restaurant website concept with menu,
        services, contact information and mobile-friendly design.
      </p>

      <div className="project-tech">
        <span>React</span>
        <span>CSS</span>
        <span>Responsive</span>
      </div>

      <div className="project-links">
        <a href="#contact">
          Request Similar →
        </a>
      </div>
    </div>


    <div className="project-card">
      <div className="project-number">03</div>

      <h3>Business Landing Page</h3>

      <p>
        A modern landing page concept created for businesses
        and startups looking to build a professional online presence.
      </p>

      <div className="project-tech">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
      </div>

      <div className="project-links">
        <a href="#contact">
          Request Similar →
        </a>
      </div>
    </div>

  </div>
</section>

      {/* Services */}
      <section className="section" id="services">
  <p className="section-label">WHAT I OFFER</p>

  <h2>Services</h2>

  <p className="section-text">
    I help businesses, startups and individuals build a strong
    online presence with modern and responsive web solutions.
  </p>

  <div className="service-grid">

    <div className="service-card">
      <div className="service-icon">01</div>

      <h3>Business Website</h3>

      <p>
        Professional and responsive websites for small businesses,
        shops, restaurants, coaching institutes and professionals.
      </p>

      <div className="service-price">
        Starting at ₹1,999
      </div>
    </div>

    <div className="service-card">
      <div className="service-icon">02</div>

      <h3>Landing Page</h3>

      <p>
        Modern landing pages designed to showcase your product,
        service, startup or personal brand.
      </p>

      <div className="service-price">
        Starting at ₹1,499
      </div>
    </div>

    <div className="service-card">
      <div className="service-icon">03</div>

      <h3>Web Application</h3>

      <p>
        Custom web applications with React, Node.js, APIs,
        authentication and database integration.
      </p>

      <div className="service-price">
        Starting at ₹4,999
      </div>
    </div>

  </div>
</section>
      {/* Contact */}
      <section className="contact-section" id="contact">
        <p className="section-label">HAVE A PROJECT?</p>

        <h2>Let's build something great.</h2>

        <p>
          Have an idea for a website or web application?
          Let's discuss it.
        </p>

        <div className="contact-buttons">
          <a
            href="mailto:tarunmewada361@gmail.com"
            className="primary-btn"
          >
           Email Me →
          </a>

          <a
          href="https://wa.me/+919301694614?text=Hi%20Tarun%2C%20I%20would%20like%20to%20discuss%20a%20website%20project."
          target="_blank"
          rel="noreferrer"
          className="whatsapp-btn"
        >
         WhatsApp Me →
        </a>
     </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Tarun Mewada. All rights reserved.</p>

        <div>
          <a href="https://github.com/TarunMewada01" target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/tarun-mewada-0536cs231069" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;