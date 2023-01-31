import Image from "next/image";
import Card from "@ericadl/components/Card";
import Head from "next/head";

export default function DataAnalytics() {
    return (
        <>
            <Head>
                <title>Data Analytics</title>
                <meta
                    name="description"
                    content="Página de preguntas técnicas de entrevista con respuesta Data Analytics"
                />
            </Head>
            <div className="container mt-3 mb-5">
                <h3 className="py-5">
                    Preguntas de entrevista para Data Analytics(con respuestas)
                </h3>
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col d-flex align-items-stretch">
                        <div class="card mt-2 ">
                            <Image
                                src="/img/cards/data-analytics-icon.png"
                                width={150}
                                height={263}
                                alt="Data Analytics 1"
                                className="card-img-top mt-3 mx-auto d-block p-5"
                            ></Image>
                            <div class="card-body">
                                <h5 class="card-title">
                                    Data analytics (análisis de datos) es un enfoque que implica
                                    el análisis de datos (big data, en particular) para sacar
                                    conclusiones. Al usar data analytics, las empresas pueden
                                    estar mejor equipadas para tomar decisiones estratégicas y
                                    aumentar su volumen de negocios.
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div class="col d-flex align-items-stretch">
                        <div class="card mt-2">
                            <Image
                                src="/img/cards/data-analytics-1.jpg"
                                width={150}
                                height={263}
                                alt="Data Analytics 1"
                                className="card-img-top mt-3 mx-auto d-block p-4"
                            ></Image>

                            <div class="card-body">
                                <h5 class="card-title">
                                    A continuación, compartimos una lista de preguntas de
                                    entrevista para el puesto junto con respuestas efectivas
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <Card />
            </div>
        </>
    );
}
