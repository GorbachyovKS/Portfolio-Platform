import React from "react";
import Project from "./Project/Project";
import me from '../assets/me.jpg'
const RMain = () => {
 
  const projects = [
    {
      id: 1,
      title: "Online Store",
      subtitle: "Online grocery store. With filter functionality with pagination, product search, catalog pages. Adding products to favorites, cart, orders. Separate page for each product. Possibility of superficial registration with storage in localStorage in order to walk through the store as a new user. Product evaluation and more. Come in and try it out.",
      site: "online store app",
      img: "p1",
      path: './projects/onlineStore/index.html',
      tools: ["React", "Zustand", "React-router-dom"],
    },
    {
      id: 2,
      title: "Ios weather clone app",
      subtitle: "Ios weather clone app. With full functionality as in the original application.",
      site: "Wheather app",
      img: "p2",
      path: './projects/wheather/index.html',
      tools: ["Vue-3", "Chart.js", "Reas API"],
    },
    {
      id: 3,
      title: "AMIS-LEAK",
      subtitle: "The commercial application AMIS-LEAK is developed for private use by the company. Receiving data from a remote server for mathematical calculations, using data for plotting and analysis. Creation of your own intermediate points on the map and full access to disable/enable tracking of them. Integration with PostgreSQL to create your own database, storing the necessary information and working with it.",
      site: "AMIS-LEAK",
      img: "p3",
      path: '',
      tools: ["Vue-3", "Pinia", "Chart.js"],
    },
  ];
  return (
    <>
      <header id="top">
        <div className="logo">{"GorbachyovKS <GKS>"}</div>
        <nav className="header-nav">
          <div className="nav-link">
            <a href="#projects">Projects</a>
          </div>
          <div className="nav-link">
            <a href="#about">About</a>
          </div>
        </nav>
      </header>
      <main>
        <div className="main-text">
          <div className="title">Hi, I’m Gorbachyov Kirill</div>
          <div className="subtitle">
            I, a Frontend developer, design websites, applications, and
            services. Adaptive layout and application development using
            frameworks such as Vue and React. Commercial experience more than 2
            years
          </div>
          <button>Hire me</button>
        </div>
        <nav className="main-nav">
          <div className="nav__social">
            <a target="_blank" href="https://www.instagram.com/gorbachyov_?igsh=czlkNzg1MjQ0bzAx&utm_source=qr">
              <i className="fa-brands fa-instagram fa-2xl"></i>
            </a>
          </div>
          <div className="nav__social">
            <a target="_blank" href="https://rabota.by/resume/91e54660ff0cd21fc00039ed1f42656d753262?from=share_ios">
              <i className="fa-solid fa-r fa-2xl"></i>
            </a>
          </div>
          <div className="nav__social">
            <a target="_blank" href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFRae9HJYOvMQAAAY1krrYgEq8s7ASGc_WRYqOUgP5w0WOe_taSpZlhm1zklDOYrGfsRfMBnP4Uo-o8qmgFcxULvPcrdsl5QZAO0NrrIhzPTM6d-1ZVCV-HNkbzyEW-1UEIGt0=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fkirill-gorbachyov-08a15b2b2%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dios_app">
              <i className="fa-brands fa-linkedin fa-2xl"></i>
            </a>
          </div>
        </nav>
      </main>
      <section id="projects">
        <div className="section__title">Best projects</div>
        <hr />
        <div className="section-projects">
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </section>
      <section id="about">
        <div className="section__title">About me</div>
        <button className="about-link">
          <a rel="noopener" href="./assets/document/Rezume.docx" download>
            <i class="fa-solid fa-download"></i>
            Rezume
          </a>
        </button>
        <hr />
        <div className="section-projects about">
          <div className="about-descr">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro atque laboriosam earum nesciunt illo numquam veniam perspiciatis, necessitatibus sequi saepe non voluptate officia similique aut? Veniam fuga perspiciatis sit ab!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro atque laboriosam earum nesciunt illo numquam veniam perspiciatis, necessitatibus sequi saepe non voluptate officia similique aut? Veniam fuga perspiciatis sit ab!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro atque laboriosam earum nesciunt illo numquam veniam perspiciatis, necessitatibus sequi saepe non voluptate officia similique aut? Veniam fuga perspiciatis sit ab!</p>
          </div>
          <div className="about-image">
            <img src={me} alt="me" />
          </div>
        </div>
        <hr />
      </section>
      <footer>
        <div className="logo">
          <a href="#top">{"<GKS>"}</a>
        </div>
        <nav className="footer-nav">
          <div className="nav-link">
            <a href="">Projects</a>
          </div>
          <div className="nav-link">
            <a href="">About</a>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default RMain;
