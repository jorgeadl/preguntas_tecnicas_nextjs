import Datos from '../data/jsons/carreras.json'

<section>  
for question in {Datos}
    <div className="card mt-3 mb-3">
      <div className="card-body">
        <h5 className="card-title">{question.Pregunta}</h5>
         if question.Respuesta != String 
        for item in question.Respuesta
        <p className="cardtitle">{item}</p>
        endfor
        else
        <p className="cardtitle">{question.Respuesta}</p>
        endif
      </div>
    </div>    
endfor
</section>