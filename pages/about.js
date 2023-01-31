// pages/index.js


export default function About(props) {
  const data = props.datajson
  const questions = props.questions;
  const bootcamp = props.bootcamp;
  
  return (
    <div style={{ padding: 30 }}>
      <div>
        <h1>{bootcamp}</h1>  
        {data.map(questions =>
          <div
            key={questions.id}
            style={{ padding: 20, borderBottom: '1px solid #ccc' }}>
            
            <h2>
            {questions.bootcamp}
            </h2>
            <h2>
            {questions.questions[0].Pregunta}
            </h2>
            
          </div>)
        }
          
      </div>
    </div>
    
  )
}
import fsPromises from 'fs/promises';
import path from 'path'
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'json/data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);
 // const objectData = JSON.parse(JSON.stringify(jsonData));
  
  return {
    props: objectData
  }
}
