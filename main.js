 //Objeto Literal
const natalia = {
  name: "Natalia",
  lastname: "Perez",
  age: 20,
  cursosAprobados: [
    "Curso Definitivo de HTML y CSS",
    "Curso Práctico de HTML y CSS",
  ],

  //aprobarCurso: function (){}

  aprobarCurso(nuevoCursito){
      this.cursosAprobados.push(nuevoCursito)
  },

};


/*Hacer que Natalia apruebe otro curso
natalia.cursosAprobados.push("Curso de Responsive Design");*/


// Primer Prototipo

function Student(name, lastname, age, cursosAprobados){
  this.name = name;
  this.lastname = lastname;
  this.age = age;
  this.cursosAprobados = cursosAprobados;

  /* this.aprobarCurso = function() {}*/
}

Student.prototype.aprobarCurso =function aprobarCurso(nuevoCursito){
  this.cursosAprobados.push(nuevoCursito)
}

const juanita = new Student("Juanita", "Alvarez", 15, ["Curso de Introducción a la Producción de Videojuegos", "Curso de Creación de Personajes"]);

// Prototipos con la sintaxis de clases

class Student2{
  // Patrón ROR (Recive object Return object)
  constructor({
    name,
    cursosAprobados = [],
    lastname,
    age,
    twitter,
    instagram,
    facebook,
    email,
  }) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    this.email = email;
  }

  aprobarCurso(nuevoCursito){
    this.cursosAprobados.push(nuevoCursito)
  }
}


const miguelito = new Student2({
  name:"Miguel",
  lastname: "Ramirez",
  age: 28,
  cursosAprobados: ["Curso de Análisis de Negocios para Ciencia de Datos",
  "Curso de Principios de visualización de Datos para BI"], 
  email: "miguelon@platzi.com",
});

const marcos = new Student2({
  email: "marquitos@platzi.com",
  name:"Marcos",
  lastname: "Gomez",
  age: 30, 
})
