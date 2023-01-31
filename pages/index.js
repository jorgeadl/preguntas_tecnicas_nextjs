import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";
import styles from "@ericadl/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

const pageTitle = "Preguntas Técnicas de Entrevista";
const pageDescription = `Home | ${pageTitle}`;

export default function Home({ children, title, description }) {
  return (
    <>
      <Head>
      <link rel="stylesheet" href={styles} />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      <section class="hero-banner home-hero">
        <figure class="hero-banner-img">
          <Image
            alt=""
            title=""
            height={100}
            width={100}
            src="/img/home/Banner-home-color-9a82fb2c5474ff3558708df660edbbbb5ad55a52e50fd28b9425143864b780a5.png"
          />
          <figcaption class="hero-banner-caption pb-1">
            <div class="container">
              <div class="row">
                <div class="col-12 col-lg-8 offset-lg-2">
                  <h4 class="t-uni-heavy-italic"></h4>
                </div>
                <div class="col-12 col-lg-8 offset-lg-2">
                  <h1 class="t-uni-heavy-italic mt-1 bla">
                    Preguntas Técnicas de Entrevista
                  </h1>
                </div>
                <div class="col-12 col-lg-8 offset-lg-2">
                  <h4 class="t-uni-heavy-italic"></h4>
                </div>
                <div class="col-12 col-lg-8 offset-lg-2">
                  <p class="p-uni-regular bla">
                    Estas son las preguntas más comúnes si estas aplicando para
                    una vacante de:
                  </p>
                  <div class="hero-menu p-uni-regular">
                    <ul>
                      <li>
                        <Link
                          href="/desarrolloFullStackJavaScript/"
                          legacyBehavior
                        >
                          <a>Desarrollo Full Stack JavaScript</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/desarrolloFrontEnd/" legacyBehavior>
                          <a>Desarrollo Front End</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/dataScience/" legacyBehavior>
                          <a>Data Science</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/disenoUxUi/" legacyBehavior>
                          <a>Diseño UX/UI</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/dataAnalytics/" legacyBehavior>
                          <a>Data Analytics</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </figcaption>
        </figure>
      </section>
      <section class="unete-cursos bg-na">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="unete-cursos-content">
                <div class="row">
                  <div class="col-12 col-md-8">
                    <div class="unete-cursos-left">
                      <p class="p-uni-heavy-italic">
                        *Tú puedes ser el próximo
                      </p>
                      <p class="p-uni-regular">
                        <span id="carreras-type">Desarrollador Full</span>
                        <span class="typed-cursor">|</span>
                      </p>
                    </div>
                  </div>
                  <div class="col-12 col-md-4">
                    <div class="unete-cursos-right">
                      <a
                        class="btn-b-na"
                        href="https://desafiolatam.com/#box-courses"
                      >
                        <code>&lt;&lt;</code>Únete<code>&gt;&gt;</code>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="cursos-home" id="cta-bottom">
        <div class="container">
          <h2 class="t-uni-italic bla">
            <code>&lt;</code>Carreras Disponibles<code>&gt;</code>
          </h2>
          <div class="row m-0">
            <div class="col-12 col-md-6 col-xl-4">
              <div class="cursos-home-content bg-am">
                <h3 class="t-uni-heavy-italic">/*DESARROLLO</h3>
                <h3 class="t-uni-heavy-italic">FULL STACK JAVASCRIPT*/</h3>
                <p>
                  Genera las competencias necesarias para sumarte a un equipo de
                  desarrollo, aprende a desarrollar aplicaciones web con Node.js
                  desde cero.
                </p>
                <Link
                  href="https://desafiolatam.com/full-stack-javascript/"
                  legacyBehavior
                >
                  <a>leer + &gt;</a>
                </Link>
              </div>
            </div>

            <div class="col-12 col-md-6 col-xl-4">
              <div class="cursos-home-content bg-ne">
                <h3 class="t-uni-heavy-italic">/*DESARROLLO</h3>
                <h3 class="t-uni-heavy-italic">FRONT END REACT*/</h3>
                <p>
                  Genera las competencias para trabajar en la capa cliente de un
                  equipo de desarrollo de aplicaciones web dominando HTML, CSS,
                  JavaScript y el framework React.
                </p>
                <Link
                  href="https://desafiolatam.com/front-end-react/"
                  legacyBehavior
                >
                  <a>leer + &gt;</a>
                </Link>
              </div>
            </div>

            <div class="col-12 col-md-6 col-xl-4">
              <div class="cursos-home-content bg-ve-o">
                <h3 class="t-uni-heavy-italic">/*DATA</h3>
                <h3 class="t-uni-heavy-italic">SCIENCE*/</h3>
                <p>
                  Súmate al mundo de la ciencia de datos. Aprenderás
                  programación orientada a estadística, visualización de datos,
                  Machine Learning y SQL.
                </p>
                <Link
                  href="https://desafiolatam.com/data-science/"
                  legacyBehavior
                >
                  <a>leer + &gt;</a>
                </Link>
              </div>
            </div>

            <div class="col-12 col-md-6 col-xl-4">
              <div class="cursos-home-content bg-ce">
                <h3 class="t-uni-heavy-italic">/*DISEÑO</h3>
                <h3 class="t-uni-heavy-italic">UX/UI*/</h3>
                <p>
                  Aprende a crear experiencias de usuarios desde la
                  investigación, la ideación, el diseño visual, la construcción
                  de prototipos, la implementación y la evaluación.
                </p>
                <Link
                  href="https://desafiolatam.com/diseno-ux-ui/"
                  legacyBehavior
                >
                  <a>leer + &gt;</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
