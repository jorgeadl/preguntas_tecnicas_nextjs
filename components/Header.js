import Image from "next/image";
import Link from "next/link";
import LogoAdl from "../public/img/logos/logo-academia-ne.png";

const Header = () => {
  return (
    <div>
      <header className="encabezado">
        <div className="row m-0 main-menu">
          <div className="col-12 p-0 nav-height">
            <nav className="navbar navbar-expand-lg navbar-dark py-4">
              <Link href="/" legacyBehavior>
                <a className="navbar-brand px-5">
                  <Image
                    width={158.812}
                    height={55}
                    src={LogoAdl}
                    alt="Logo Academia DesafioLatam"
                  />
                </a>
              </Link>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarScroll"
                aria-controls="navbarScroll"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="navbar-collapse collapse " id="navbarScroll">
                <ul className="navbar-nav navbar-nav-scroll w-100">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Carreras
                    </a>

                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          legacyBehavior
                          href="/DesarrolloFullStackJavascript/"
                        >
                          <a className="dropdown-item">
                            Desarrollo Full Stack JavaScript
                          </a>
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>

                      <li>
                        <a
                          className="dropdown-item"
                          href="/DesarrolloFrontEnd/"
                        >
                          Desarrollo Front End
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>

                      <li>
                        <a className="dropdown-item" href="/DataScience/">
                          Data Science
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>

                      <li>
                        <a className="dropdown-item" href="/DisenoUXUI/">
                          Diseño UX/UI
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>

                      <li>
                        <Link legacyBehavior href="/DataAnalytics/">
                          <a className="dropdown-item" >
                            Data Analytics
                          </a>
                        </Link>
                        
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="col-auto d-none d-lg-block top-redes px-5">
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/DesafioLatam/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-facebook bla" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/desafiolatam/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-instagram bla" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCz0ekVt3TQ65voddo9xVOQw/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-youtube-play bla" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
