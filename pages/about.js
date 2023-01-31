export default function About(props) {
  const data = props.datajson
 
  
  return (
    <div style={{ padding: 30 }}>
      <div>

        {data.map(questions =>
          <div
            key={questions.id}
            style={{ padding: 20, borderBottom: '1px solid #ccc' }}>
            <h5>
            {questions.bootcamp}
            </h5>
            <h5>
            {questions.questions[0].Pregunta}
            </h5> 
            <h5>
            {questions.questions[1].Pregunta}
            </h5>           
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
