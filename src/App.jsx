import "./App.css";

function App() {
  return (
    <>
      {/* ================= HERO ================= */}

      <section className="hero" id="home">
        <header>
          <nav>
            <ul>
              <li><a href="#home" className="active">HOME</a></li>
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#skills">SKILLS</a></li>
              <li><a href="#portfolio">WORKS</a></li>
            </ul>
          </nav>
        </header>

        <div className="hero-content">

          <img
            src="./pic.jpeg"
            alt="Mansoor Siddique"
            className="hero-profile"
          />

          <h1>I'm Mansoor Siddique.</h1>

          <p>
            I'm a Pakistan based
            <span> Full Stack Developer </span>
            specializing in
            <span> React</span>,
            <span> Node.js</span>,
            <span> Express.js</span>,
            <span> MongoDB</span>
            and modern web technologies.
            I build responsive, scalable and interactive web applications.
            Let's
            <a
              href="#portfolio"
              style={{ fontSize: "25px", color: "white" }}
            >
              {" "}explore my work.
            </a>
          </p>

          <div className="contact-row">
            <span>📱 +92 328 1650996</span>
            <span>✉ Siddique.Mansoor164@gmail.com</span>
          </div>

          <div className="social-icons">

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile"
            >
              <i className="fab fa-github"></i>
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
            >
              <i className="fab fa-linkedin"></i>
            </a>

            <a
              href="/resume.pdf"
              download="Mansoor_Siddique_Resume.pdf"
              title="Download PDF Resume"
              className="download-btn"
            >
              <i className="fas fa-download"></i>
              <span>Download Resume</span>
            </a>

          </div>

        </div>

        <div className="scroll-down">
          <a href="#about">⌄</a>
        </div>

      </section>
      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="section"
      >

        <h2 className="section-title">
          About Me
        </h2>

        <div className="glass-card about-card">

          <p>
            Passionate Full Stack Developer with practical experience
            building responsive web applications using
            HTML, CSS, JavaScript, React,
            Node.js, Express.js and MongoDB.

            <br /><br />

            I enjoy transforming ideas into elegant,
            modern and user-friendly digital experiences.
            I constantly learn new technologies
            and love solving real-world problems through code.
          </p>

        </div>

      </section>

      {/* ================= SKILLS ================= */}

      <section
        id="skills"
        className="section"
      >

        <h2 className="section-title">
          Skills
        </h2>

        <div className="skills-grid">

          <div className="skill-card">HTML5</div>
          <div className="skill-card">CSS3</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">React</div>

          <div className="skill-card">Node.js</div>
          <div className="skill-card">Express.js</div>
          <div className="skill-card">MongoDB</div>
          <div className="skill-card">REST API</div>

          <div className="skill-card">Git</div>
          <div className="skill-card">GitHub</div>
          <div className="skill-card">Tailwind CSS</div>
          <div className="skill-card">jQuery</div>
          <div className="skill-card">Supabase</div>
          <div className="skill-card">WordPress</div>

        </div>

      </section>
      {/* ================= PORTFOLIO ================= */}

      <section
        id="portfolio"
        className="section"
      >

        <h2 className="section-title portfolio-title">
          Portfolio
        </h2>

        <div className="portfolio-list">

          {/* ================= CV ================= */}

          <div className="portfolio-item">

            <div className="project-preview">
              <iframe
                src="https://cv-rho-flax.vercel.app/"
                title="CV Project"
              ></iframe>
            </div>

            <div className="project-info">

              <span className="project-tag">
                Featured Project
              </span>

              <h3>Professional CV / Portfolio</h3>

              <p>
                A modern personal portfolio built with React that showcases my
                skills, projects and experience with a clean, responsive design
                and smooth user experience.
              </p>

              <div className="tech-stack">
                <span>React</span>
                <span>CSS</span>
                <span>Responsive</span>
              </div>

              <div className="project-buttons">

                <a
                  href="https://cv-rho-flax.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/wingless-bird/CV"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>

              </div>

            </div>

          </div>

          {/* ================= E-COMMERCE ================= */}

          <div className="portfolio-item">

            <div className="project-preview">
              <iframe
                src="https://cart-sooty-pi.vercel.app/"
                title="E-Commerce Website"
              ></iframe>
            </div>

            <div className="project-info">

              <span className="project-tag">
                Full Stack
              </span>

              <h3>E-Commerce Website</h3>

              <p>
                Full-stack shopping application featuring product management,
                cart functionality, REST APIs, responsive UI and MongoDB
                database integration.
              </p>

              <div className="tech-stack">
                <span>React</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>MongoDB</span>
              </div>

              <div className="project-buttons">

                <a
                  href="https://cart-sooty-pi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/wingless-bird/CART"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Frontend
                </a>

                <a
                  href="https://github.com/wingless-bird/CART-Backend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Backend
                </a>

              </div>

            </div>

          </div>

          {/* ================= LOGIN SYSTEM ================= */}

          <div className="portfolio-item">

            <div className="project-preview">
              <iframe
                src="https://login-system-kohl-three.vercel.app/"
                title="Login System"
              ></iframe>
            </div>

            <div className="project-info">

              <span className="project-tag">
                Authentication
              </span>

              <h3>Login System</h3>

              <p>
                Authentication system featuring user registration, secure login,
                protected routes and a modern responsive React interface.
              </p>

              <div className="tech-stack">
                <span>React</span>
                <span>Supabase</span>
                <span>Authentication</span>
              </div>

              <div className="project-buttons">

                <a
                  href="https://login-system-kohl-three.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/wingless-bird/Login-System"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>

              </div>

            </div>

          </div>

          {/* ================= WEATHER APP ================= */}

          <div className="portfolio-item">

            <div className="project-preview">
              <iframe
                src="https://wingless-bird.github.io/Weather-app/search.html"
                title="Weather App"
              ></iframe>
            </div>

            <div className="project-info">

              <span className="project-tag">
                API Project
              </span>

              <h3>Weather Update App</h3>

              <p>
                Weather application powered by live weather APIs with city
                search, responsive layout and a clean user experience.
              </p>

              <div className="tech-stack">
                <span>JavaScript</span>
                <span>Weather API</span>
                <span>HTML</span>
                <span>CSS</span>
              </div>

              <div className="project-buttons">

                <a
                  href="https://wingless-bird.github.io/Weather-app/search.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/wingless-bird/Weather-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>

              </div>

            </div>

          </div>

          {/* ================= COMING SOON ================= */}

          <div className="portfolio-item">

            <div className="project-preview">
              <iframe
                src="https://coming-soon-page-with-background-im.vercel.app/"
                title="Coming Soon Landing Page"
              ></iframe>
            </div>

            <div className="project-info">

              <span className="project-tag">
                Landing Page
              </span>

              <h3>Coming Soon Landing Page</h3>

              <p>
                Animated landing page with a fullscreen background image slider,
                modern typography and a polished responsive layout.
              </p>

              <div className="tech-stack">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>

              <div className="project-buttons">

                <a
                  href="https://coming-soon-page-with-background-im.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/wingless-bird/Coming-Soon-Page-with-Background-Image-Slider"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>

              </div>

            </div>

          </div>

          {/* ================= CONSTRUCTION WEBSITE ================= */}

          <div className="portfolio-item">

            <div className="project-preview">
              <iframe
                src="https://wingless-bird.github.io/One-Page-Website/"
                title="Construction Company Website"
              ></iframe>
            </div>

            <div className="project-info">

              <span className="project-tag">
                Responsive Landing Page
              </span>

              <h3>Construction Company Website</h3>

              <p>
                A high-performance, single-page corporate platform mapping architecture designs, 
                structural planning matrices, estimation pipelines, and responsive layout parameters.
              </p>

              <div className="tech-stack">
                <span>HTML5</span>
                <span>CSS3</span>
                <span>JavaScript</span>
                <span>Responsive</span>
              </div>

              <div className="project-buttons">

                <a
                  href="https://wingless-bird.github.io/One-Page-Website/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/wingless-bird/One-Page-Website"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Mansoor Siddique.
        </p>
        <p>
          Designed & Developed with ❤️ using React
        </p>
      </footer>
    </>
  );
}

export default App;
