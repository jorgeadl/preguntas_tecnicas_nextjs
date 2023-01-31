import Cards from "/components/Cards";
import React from 'react'
import Image from "next/image";


const Index = () => {
  return (
    <div>
      <div className="container mt-3 mb-5">
        <h3 className="p-4 mb-3">
          Preguntas de entrevista para Data Analytics(con respuestas)
        </h3>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col d-flex align-items-stretch">
            <div className="card mt-2 p-5 mx-auto d-block">
              <Image
                src="/img/cards/data-analytics-icon.png"
                width={150}
                height={150}
                className="card-img-top img-fluid mt-3 mx-auto d-block"
                alt="logo-Analytics"
                style={{ width: '150px' }}

              />
              <div className="card-body">
                <h6 className="card-subtitle mt-4">
                  Data analytics (análisis de datos) es un enfoque que implica
                  el análisis de datos (big data, en particular) para sacar
                  conclusiones. Al usar data analytics, las empresas pueden
                  estar mejor equipadas para tomar decisiones estratégicas y
                  aumentar su volumen de negocios.
                </h6>
              </div>
            </div>
          </div>
          <div className="col d-flex align-items-stretch">
            <div className="card mt-2 p-5">
              <Image
                src={"/img/cards/data-analytics-1.jpg"}
                height={300}
                width={300}
                className="card-img-top card-img-fluid mt3"
                alt="logo-java"
                
              />
              <div className="card-body">
                <h6 className="card-subtitle mt-1">
                  A continuación, compartimos una lista de preguntas de
                  entrevista para el puesto junto con respuestas efectivas
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};
export default Index;
