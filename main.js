import Course from './clases/Courses.js';
import Lessons from './clases/Lessons.js';
import LearningPaths from './clases/LearningPaths.js';
import Student from './clases/Student.js';
import Courses from './clases/Courses.js';
import Comments from './clases/Comments.js';
import Modules from './clases/Modules.js';


// Escuela De Desarrollo Web

// Curso de Programacion Básica

// Modulo: Recap Curso Gratis de Programación Básica
const recapProgBasica = new Lessons ({
	id: 1,
	name: "Recap Programación básica",
});

const recapCursoGratisProgBasica = new Modules ({
	name: "Recap Curso Gratis de Programación Básica",
	lessons:[
		recapProgBasica,
	]
});

// Modulo: Empieza por acá
const miPrimerLineaCodigo = new Lessons ({
	id: 2,
	name: "Mi primer línea de código",
});

const empiezaAca = new Modules ({
	name: "Empieza por acá",
	lessons: [
		miPrimerLineaCodigo,
	],
})


// Modulo: Fundamentos de Programación
const queEsHTMLCSSJS = new Lessons ({
	id: 3,
	name: "¿Qué es HTML/CSS/JS?",
});

const FundamentosProg = new Modules ({
	name: "Fundamentos de Programación",
	lessons: [
		queEsHTMLCSSJS,
	],
});

const cursoProgBasica = new Courses ({
	name:"Curso Gratis de Programación Básica",
	modules: [
		recapCursoGratisProgBasica,
		FundamentosProg,
	]
});

const cursoDefHTMLYCSS= new Courses ({
	name:"Curso Definitivo de HTML y CSS",
});

const cursoPracticoHTMLYCSS= new Courses ({
	name:"Curso Práctico de HTML y CSS",
});

const cursoResponsiveDesign = new Courses ({
	name: "Curso de Responsive Design",
});

const escuelaWeb = new LearningPaths({
	name: "Escuela de Desarrollo Web",
	description: "descripcion de la escuela",
	courses: [
		cursoDefHTMLYCSS,
		cursoPracticoHTMLYCSS,
		cursoProgBasica,
		cursoResponsiveDesign,
	],
});

// Escuela De Desarrollo De Videojuegos
const cursoIntroProduccionVgs = new Courses ({
	name:	"Curso de Introducción a la Producción de Vgs",

});

const cursoPlaneacionDireccionVgsIndies = new Courses ({
	name:	"Curso de Planeación y Dirección de Vgs Indies",

});

const cursoCreacionVgs = new Courses ({
	name:		"Curso de Creación de Vgs",

});

const escuelaVgs = new LearningPaths({
	name: "Escuela de Videojuegos",
	description:"Esta escuela te guiará para convertirte, desde cero, en un profesional listo para diseñar, desarrollar y lanzar un videojuego.",
	courses: [
		cursoProgBasica,
		cursoIntroProduccionVgs,
		cursoCreacionVgs,
		cursoPlaneacionDireccionVgsIndies,
	],
});

// EScuela Data Science
const cursoAnalisisNegociosDataSience = new Courses ({
	name: "Curso de Análisis de Negocios para Ciencia de Datos",

});

const cursoPython = new Courses ({
	name:	"Curso Básico de Python",

});

const cursoJupyterNotebookDataScience = new Courses ({
	name:	"Curso de Jupyter Notebook para Ciencia de Datos",

});

const escuelaData = new LearningPaths({
	name: "Escuela de Data Science",
	description:"Domina las herramientas y técnicas para el procesamiento de Big Data y Ciencia de Datos.",
	courses: [
		cursoProgBasica,
		cursoAnalisisNegociosDataSience,
		cursoPython,
		cursoJupyterNotebookDataScience,
	],
});

// Estudiantes
const joaquin = new Student({
	name: "Joaquin",
	username: "Joaquin",
	email: "joakoelkapo_gyt@hotmail.com",
	twitter: "joakoTejerina",
	learningPaths: [
		escuelaWeb,
		escuelaVgs,
	], 
});

const miguelito = new Student({
	name: "Miguel",
	username: "MiguelitoFeliz",
	email: "miguelP@platzi.com",
	instagram: "miguelito_Feliz",
	learningPaths: [
		escuelaWeb,
		escuelaData,
	],
});