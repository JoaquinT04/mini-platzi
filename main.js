
class LearningPaths {
	constructor({
		name,
		description,
		courses = [],
	}){
		this.name = name;
		this.description = description;
		this.courses = courses;
	}
}

const escuelaWeb = new LearningPaths({
	name: "Escuela de Desarrollo Web",
	description: "descripcion de la escuela",
	courses: [
		"Curso Definitivo de HTML y CSS",
		"Curso Práctico de HTML y CSS",
		"Curso de Responsive Design",
	],
});

const escuelaVgs = new LearningPaths({
	name: "Escuela de Videojuegos",
	description:"Esta escuela te guiará para convertirte, desde cero, en un profesional listo para diseñar, desarrollar y lanzar un videojuego.",
	courses: [
		"Curso de Introducción a la Producción de Vgs",
		"Curso de Planeación y Dirección de Vgs Indies",
		"Curso de Creación de Vgs",
	],
});

const escuelaData = new LearningPaths({
	name: "Escuela de Data Science",
	description:"Domina las herramientas y técnicas para el procesamiento de Big Data y Ciencia de Datos.",
	courses: [
		"Curso de Análisis de Negocios para Ciencia de Datos",
		"Curso Básico de Python",
		"Curso de Jupyter Notebook para Ciencia de Datos",
	],
});

class Student {
	constructor ({
		name,
		email,
		username,
		twitter = undefined,
		instagram = undefined,
		facebook = undefined,
		approvedCourses = [],
		learningPaths = [],
	}) {
		this.name = name;
		this.email = email;
		this.username = username;
		this.socialMedia = {
			twitter, 
			instagram,
			facebook,	
		}
		this.approvedCourses = approvedCourses; 
		this.learningPaths = learningPaths; 
	}
}

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