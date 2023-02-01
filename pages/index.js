
import Link from "next/link";
import fsPromises from 'fs/promises';
import path from 'path'
import Home_base from "@/components/Home_base";

export default function Home(props) {
  const carreras = props.datajson
  return (
    <>
      <section className="container py-5 text-center">
        <h1>Preguntas Técnicas de Entrevista</h1>
        <div>
          Estas son las preguntas más comúnes si estas aplicando para una
          vacante de:
          {carreras.map(({bootcamp, questions}) => (
            <div key={questions.id}>
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
      <Home_base />
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'json/data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData
  }
}