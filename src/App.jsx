
import { FaGithub, FaLinkedinIn, FaEnvelope, FaArrowRight,  FaWhatsapp, FaFacebookF } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar navbar-expand-lg portfolio-nav">
        <div className="container">
          <a className="navbar-brand brand" href="#home">
            Caleb<span>.</span>
          </a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
               <a href="#skills">Skills</a>
               <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="#contact" className="nav-contact">
            Let's Talk <FaArrowRight />
          </a>
        </div>
      </nav>

      <main>
        <section className="hero container" id="home">
          <div className="hero-content">
            <div className="hero-image">
              <img src="/calebpics.jpg" alt="Emerelauwaonu Frank Caleb" />
            </div>
            <div className="availability">
              <span className="status-dot"></span>
              FULL STACK DEVELOPER
            </div>

            <p className="eyebrow">HELLO, I'M</p>

            <h1>
              Emerelauwaonu
              <br />
              <span>Frank Caleb.</span>
            </h1>

            <h2>
              I build <span>full stack applications.</span>
            </h2>

            <p className="hero-description">
              I'm a Full Stack Developer passionate about building responsive
              web applications, secure APIs, and reliable server-side systems.
              I work with React, JavaScript, Node.js, Express, MongoDB, and
              PostgreSQL to turn ideas into practical digital solutions.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn-primary-custom">
                Explore My Work <FaArrowRight />
              </a>

              <a href="#contact" className="btn-outline-custom">
                Contact Me
              </a>
            </div>

              <a
                href="/Caleb_CV.pdf"
                download="Caleb-CV.pdf"
                className="btn-outline-custom"
                  >
                <FaArrowRight />
                Download CV
              </a>
                    
            <div className="social-links">
              <a
                href="https://linkedin.com/in/caleb-emerelauwaonu-697bb9296"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://github.com/Cabby4"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.facebook.com/Mouriho14"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                title="Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="mailto:emerelauwaonucaleb@gmail.com"
                aria-label="Email"
                title="Email"
              >
                <FaEnvelope />
              </a>

            </div>
          </div>

          <div className="hero-visual">
            <div className="code-window">
              <div className="window-header">
                <div className="window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span>developer.js</span>
              </div>

                <p>
                  role: <span className="code-green">"Full Stack Developer"</span>,
                </p>

                <p className="indent">
                  skills: [
                </p>

                <p className="indent2">
                  <span className="code-yellow">"React"</span>,
                </p>

                <p className="indent2">
                  <span className="code-yellow">"Node.js"</span>,
                </p>

                <p className="indent2">
                  <span className="code-yellow">"Express.js"</span>,
                </p>

                <p className="indent2">
                  <span className="code-yellow">"MongoDB"</span>,
                </p>

                <p className="indent2">
                  <span className="code-yellow">"PostgreSQL"</span>
                </p>

                <p className="indent">],</p>

              <div className="code-footer">
                <span className="status-dot"></span>
                Ready to build something great
              </div>
            </div>

            <div className="floating-card">
              <span className="floating-icon">{"</>"}</span>
              <div>
                <strong>Clean Code</strong>
                <p>Built with purpose.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="quick-stats">
          <div className="container stats-grid">
            <div>
              <strong>02+</strong>
              <span>Year of Experience</span>
            </div>
            <div>
              <strong>Node.js</strong>
              <span>Backend Development</span>
            </div>
            <div>
              <strong>REST APIs</strong>
              <span>Design & Development</span>
            </div>
            <div>
              <strong>MongoDB</strong>
              <span>Database Management</span>
            </div>

             <div>
              <strong>React</strong>
              <span>Frontend Development</span>
            </div>

          </div>
        </section>

        <section className="content-section container" id="about">
          <p className="section-label">01 / ABOUT ME</p>
          <h2>Behind the <span>code.</span></h2>
          <p className="section-description">
            I'm a Full Stack Developer who enjoys building complete web
            applications, from responsive user interfaces to secure backend
            services. My experience includes React, Node.js, Express.js,
            MongoDB, PostgreSQL, API development, authentication, and
            database management. I focus on creating useful, reliable,
            and maintainable software that solves real-world problems.
          </p>
        </section>

        <section className="content-section container" id="skills">
          <p className="section-label">02 / MY TOOLKIT</p>
          <h2>Technologies I <span>work with.</span></h2>

          <div className="skills-grid">

            {[
                  "HTML & CSS",
                  "JavaScript",
                  "React",
                  "Bootstrap",
                  "Tailwind-css",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "PostgreSQL",
                  "REST APIs",
                  "JWT Authentication",
                  "Git & GitHub",
                  "Postman",
                ].map((skill) => (
                  <div className="skill-card" key={skill}>
                    <span className="skill-mark">{"</>"}</span>
                    {skill}
                  </div>
                ))}
          </div>
        </section>

        <section className="content-section container" id="projects">
          
<section className="content-section container" id="experience">
  <p className="section-label">03 / EXPERIENCE</p>
  <h2>My professional <span>journey.</span></h2>

  <div className="experience-list">
    <article className="experience-card">
      <div className="experience-marker">
        <span></span>
      </div>

      <div className="experience-content">
        <div className="experience-top">
          <div>
            <h3>Senior Developer</h3>
            <p className="experience-company">Cabby Tech Lim</p>
          </div>
          <span className="experience-date">2025 — Present</span>
        </div>

        <p className="experience-description">
          Building and improving web applications, developing backend
          services and APIs, working with databases, and contributing
          to reliable software solutions.
        </p>

        <div className="project-tags">
          <span>JavaScript</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>Databases</span>
        </div>
      </div>
    </article>

    <article className="experience-card">
      <div className="experience-marker">
        <span></span>
      </div>

      <div className="experience-content">
        <div className="experience-top">
          <div>
            <h3>Full Stack Project Developer</h3>
            <p className="experience-company">ScholarisIQ — Capstone Project</p>
          </div>
          <span className="experience-date">2026</span>
        </div>

        <p className="experience-description">

            A gamified tech-learning platform featuring quizzes and
            interactive challenges. I contributed to engagement features
            using React, Node.js, Express, MongoDB, and JWT.

        </p>

        <div className="project-tags">
          <span>React</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB</span>
          <span>JWT</span>
        </div>
      </div>
    </article>
  </div>
</section>

          <p className="section-label">03 / SELECTED WORK</p>
          <h2>Projects I've <span>built.</span></h2>

          <div className="projects-grid">
            <article className="project-card">
              
<article className="project-card">
  <div className="project-number">PROJECT / 02</div>

  <h3>Cabby Sports</h3>

  <p>
    A full-stack sports media platform delivering football news,
    fixtures, results, transfers, and team information. Includes
    an administrative dashboard for managing sports content,
    powered by a React frontend and an Express.js backend.
  </p>

  <div className="project-tags">
    <span>React</span>
    <span>Bootstrap</span>
    <span>Node.js</span>
    <span>Express.js</span>
    <span>MongoDB Atlas</span>
    <span>JWT</span>
  </div>

  <div className="project-actions">
    <a
      href="https://cabbysports.vercel.app/"
      target="_blank"
      rel="noreferrer"
      className="project-link"
    >
      Live Demo <FaArrowRight />
    </a>

    <a
      href="https://github.com/Cabby4/cabby-sports-backend"
      target="_blank"
      rel="noreferrer"
      className="project-link project-github"
    >
      <FaGithub /> Backend Code
    </a>
  </div>
</article>

              
              <div className="project-number">PROJECT / 01</div>
              <h3>ScholarisIQ</h3>
              <p>
                A habit-driven learning platform designed to help learners
                develop technology skills through engaging quizzes and
                interactive game features.
              </p>
              <div className="project-tags">
                <span>Node.js</span><span>Express</span><span>MongoDB</span>
              </div>
              <a
                href="https://frontend-zeta-one-18.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                View Project <FaArrowRight />
              </a>
            </article>

            <article className="project-card">
              
<article className="project-card">
  <div className="project-number">PROJECT / 01</div>

  <h3>ScholarisIQ</h3>

  <p>
    A habit-driven technology learning platform designed to help
    learners build career-ready skills through interactive quizzes
    and game-based engagement. I contributed quiz and game features
    to make learning more engaging and interactive.
  </p>

  <div className="project-tags">
    <span>React</span>
    <span>Node.js</span>
    <span>Express.js</span>
    <span>MongoDB</span>
    <span>JWT</span>
  </div>

  <div className="project-actions">
    <a
      href="https://frontend-zeta-one-18.vercel.app/"
      target="_blank"
      rel="noreferrer"
      className="project-link"
    >
      Live Demo <FaArrowRight />
    </a>

    <a
      href="https://github.com/Cabby4/sch"
      target="_blank"
      rel="noreferrer"
      className="project-link project-github"
    >
      <FaGithub /> Source Code
    </a>
  </div>
</article>

              <div className="project-number">PROJECT / 02</div>
              <h3>Cabby Sports</h3>
              <p>
                A sports media platform featuring football news, fixtures,
                results, transfers, team information, and an administrative
                dashboard for managing content.
              </p>
              <div className="project-tags">
                <span>React</span><span>Express</span><span>MongoDB</span>
              </div>
              <a
                href="https://cabbysports.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                View Project <FaArrowRight />
              </a>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-inner">
            <p className="section-label">04 / GET IN TOUCH</p>
            <h2>Let's build something <span>meaningful.</span></h2>
            <p>
              Have a project, an opportunity, or an idea? I'd love to hear
              from you.
            </p>
            <a
              href="mailto:caleb@example.com"
              className="btn-primary-custom"
            >
              <FaEnvelope /> Send Me an Email
            </a>
                <a
                  href="https://wa.me/2349016463849?text=Hello%20Caleb%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
                  target="_blank"
                  rel="noreferrer"
                  className="whatsapp-button"
                >
                  <FaWhatsapp />
                  Chat with me on WhatsApp
                </a>
          </div>
        </section>
      </main>

      <footer className="portfolio-footer">
        <div className="container">
          <a className="brand" href="#home">Caleb<span>.</span></a>
          <p>Designed & built with care by Caleb.</p>
          <span>© {new Date().getFullYear()} All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
