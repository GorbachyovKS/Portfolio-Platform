import React from "react";
import Project from "./Project/Project";
import me from '../assets/me.jpg'
const RMain = () => {

  const projects = [
    {
      id: 1,
      title: "Интернет-магазин",
      subtitle: "Интернет-магазин продуктов. С функцией фильтра с нумерацией страниц, поиском товаров, страницами каталога. Добавление товаров в избранное, корзину, заказы. Отдельная страница для каждого товара. Возможность поверхностной регистрации с хранилищем в localStorage, чтобы ходить по магазину как новый пользователь. Оценка продукта и многое другое. Заходите и попробуйте.",
      site: "Online-store",
      img: "p1",
      path: './projects/onlineStore/index.html',
      tools: ["React", "Zustand", "React-router-dom", "react-yandex-maps"],
    },
    {
      id: 2,
      title: "Клон погоды IOS",
      subtitle: "Приложение-клон погоды iOS. С функционалом как в оригинальном приложении. Просмотр погоды в реальном времени. Графики и другие метеорологические показетели",
      site: "Wheather IOS",
      img: "p2",
      path: './projects/wheather/index.html',
      tools: ["Vue-3", "Chart.js", "API"],
    },
    {
      id: 3,
      title: "AMIS-LEAK",
      subtitle: "Коммерческое приложение AMIS-LEAK разработано компанией для частного использования. Получение данных с удаленного сервера для математических расчетов, использование данных для построения графиков и анализа. Создание собственных промежуточных точек на карте и полный доступ к их отключению/включению отслеживания. Интеграция с PostgreSQL для создания собственной базы данных, хранения необходимой информации и работы с ней.",
      site: "AMIS-LEAK",
      img: "p3",
      path: '#',
      tools: ["Vue-3", "Pinia", "Chart.js", 'Axios', "Vue-yandex-maps", "Xlsx"],
    },
  ];
  return (
    <>
      <header id="top">
        <div className="logo"><span>GorbachyovKS</span>{"<GKS>"}</div>
        <nav className="header-nav">
          <div className="nav-link">
            <a href="#projects">Проекты</a>
          </div>
          <div className="nav-link">
            <a href="#about">Обо мне</a>
          </div>
        </nav>
      </header>
      <main>
        <div className="main-text">
          <div className="title">Привет, я Кирилл Горбачев.</div>
          <div className="subtitle">
            Я, Frontend-разработчик, занимаюсь дизайном веб-сайтов, приложений и сервисов. Адаптивная верстка и разработка приложений с использованием таких фреймворков, как Vue и React. Коммерческий опыт более 2 лет
          </div>
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
          <div className="nav__social">
            <a target="_blank" href="https://www.fl.ru/users/gorbachyovks/portfolio/">
              <i class="fa-solid fa-f fa-xl"></i>
              <i class="fa-solid fa-l fa-xl"></i>
            </a>
          </div>
        </nav>
      </main>
      <section id="projects">
        <div className="section__title">Пример проектов</div>
        <hr />
        <div className="section-projects">
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </section>
      <section id="about">
        <div className="section__title">Обо мне</div>
        <button className="about-link">
          <a rel="noopener" href="./assets/document/Rezume.docx" download>
            <i class="fa-solid fa-download"></i>
            Резюме
          </a>
        </button>
        <hr />
        <div className="section-projects about">
          <div className="about-descr">
            <div className="about-descr__elem">
              <h2>ОПЫТ</h2>
              <ul>
                <li>- Знания HTML/CSS: semantic tags, верстка под мобильные устройства, методология БЭМ</li>
                <li>- Знания JavaScript: ES6+, Axios, Fetch, Async/await, promise API</li>
                <li>- Опыт работы с React: React-router-dom, global store -Zustand, SPA</li>
                <li>- Опыт работы с Vue.js: Vue-3, Vue-router, Composition API, Optional API, global store – Pinia/Vuex, Lifecycle hooks, SPA, Transition</li>
              </ul>
            </div>
            <div className="about-image clone">
              <img src={me} alt="me" />
            </div>
            <div className="about-descr__elem">
              <h2>ТЕХНИЧЕCКИЕ СКИЛЫ</h2>
              <ul>
                <li>- Languages: JavaScript, SQL (PostgreSQL)</li>
                <li>- Frameworks: Vue 3 (Vuex, Pinia), React (Zustand), Node.js</li>
                <li>- Tools: HTML5, Semantic tags, CSS3, SASS, Git, Figma</li>
                <li>- Libraries: GSAP, PIXI, Chart.js, Router</li>
              </ul>
            </div>
          </div>
          <div className="about-image">
            <img src={me} alt="me" />
          </div>
        </div>
        <hr />
      </section>
      <footer>
        <div className="logo">
          <a href="#top">{"</GKS>"}</a>
        </div>
        <nav className="footer-nav">
          <div className="nav-link">
            <a href="#projects">Проекты</a>
          </div>
          <div className="nav-link">
            <a href="#about">Обо мне</a>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default RMain;
