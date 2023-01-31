import Head from "next/head";
import Layout from "@ericadl/components/Layout";
import { carreras } from '@ericadl/data/carreras'

export default function Questions() {
    return (
        <>
            {data.map(({ bootcamp, questions }) => {
                <>
                    <section>
                        <div class="card mt-3 mb-3">
                            <div class="card-body">
                                {}
                                <h5 class="card-title">{bootcamp}</h5>
                                <h3></h3>
                                <p class="cardtitle"></p>
                                <p class="cardtitle"></p>
                                <p class="cardtitle"></p>
                                <p class="cardtitle"></p>
                            </div>
                        </div>
                    </section>
                </>
            })}
        </>
    )
}

export function getStaticsPaths() {
    const paths = carreras.map((element) => {
        params: { id: element.bootcamp }
    });
    return {
        paths,
        fallback: false,
    }
}

export function getStaticProps() {
    const data = carreras.filter(element => element.bootcamp == params.id);
    console.log(data);
    return {
        props: {
            data
        }
    };
}