import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { carreras } from "../posts/carreras";

export default function Home({ dataCarreras }) {
  return (
    <>
      <section className={utilStyles.headingMd}>
        <h1>Preguntas Técnicas de Entrevista</h1>
        <div>
          Estas son las preguntas más comúnes si estas aplicando para una
          vacante de:
          {dataCarreras.map(({bootcamp}) => (
            <div>
              <ul>
                <li>
                  <Link href={`/carreras/${bootcamp}`}>
                    {bootcamp}
                  </Link>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export function getStaticProps() {
  const dataCarreras = carreras.map((dataCarreras) => dataCarreras);
  return {
    props: {
      dataCarreras,
    },
  };
}
