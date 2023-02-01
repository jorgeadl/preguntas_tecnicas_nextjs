import fsPromises from 'fs/promises';
import path from 'path'



export default function About(props) {
  const data = props.datajson;
  console.log(props)
  return (
    <div style={{ padding: 30 }}>
      <div>
        
        {data.map(({bootcamp, questions}) =>
        
          <div
            key={questions.id}
            style={{ padding: 20, borderBottom: '1px solid #ccc' }}>
            <h5>
           {bootcamp}
            </h5>
            <h5>
            {questions.map(({Pregunta, Respuesta, Type}) =>{
              return(<div key={questions.id}>
                <h5 className='text-primary py-3'>{Pregunta}</h5>
                <div className='fs-6'>{ Type == 'Array' ?  Respuesta.map(element => <div key={questions.id}>{element}</div>)  : Respuesta }</div>
               
                </div>)
              
            })}
            </h5> 
                     
          </div>)
        }   
      </div>
    </div>
    
  )
}
export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "json/data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);
  const objectDataArray = objectData.datajson;
  const paths = objectDataArray.map((element) => ({
    params: { id: element.bootcamp },
  }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({params}) {
  const filePath = path.join(process.cwd(), 'json/data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);
  const objectDataArray = objectData.datajson;
  const datajson = objectDataArray.filter(
    (element) => element.bootcamp == params.id
  );
 // const objectData = JSON.parse(JSON.stringify(jsonData));
  
  return {
    props: {
      datajson,
    },  
  };
}


