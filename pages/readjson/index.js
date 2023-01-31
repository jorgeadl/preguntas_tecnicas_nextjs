// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path'

export default function readjson(props) {
    const posts = props.data;
    return (
        <div style={{ padding: 30 }}>

            <div>

                {posts.map(item =>
                    <div
                        key={item.bootcamp}
                        style={{ padding: 20, borderBottom: '1px solid #ccc' }}>
                        <h2>{item.bootcamp}</h2>
                        <div>{item.questions.map(question =>
                            <><h2 className='text-primary'>{question.Pregunta}</h2>
                                <h2>{question.Respuesta}</h2></>
                        )}

                        </div>

                    </div>)}
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'json/data.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);

    return {
        props: objectData
    }
}