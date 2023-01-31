//HOMEPAGE TYPE CARERRAS
var options = {
    strings: ["Desarrollador Full Stack", "Analista Data Science", "Desarrollador Front End", "Especialista en Marketing Digital", "Diseñador UX/UI"],
    typeSpeed: 40,
    loop: true
  }

var typed = null
if ($("#carreras-type").length > 0){
    typed = new Typed("#carreras-type", options);
  }
