import { carreras } from "../data/carreras";



export default function Card({ data }) {
    return (
        <section>
            <div className="card mt-3 mb-3">
                <div className="card-body">
                    <h5 className="card-title"></h5>
                    <h3 className="cardtitle"></h3>
                    <p className="cardtitle"></p>
                    <p className="cardtitle"></p>
                    <p className="cardtitle"></p>
                </div>
            </div>
        </section>
    );
}

// export function getStaticPaths() {
//     const paths = Carreras.map((element) => ({
//         params: { id: element.bootcamp },
//     }));
//     console.log(paths);
//     return {
//         paths,
//         fallback: false,
//     };
// }


export function getStaticProps() {
    let data = carreras.map((data) => data);
    console.log(data);
        return {
            props: {
                data
        }
    }
}