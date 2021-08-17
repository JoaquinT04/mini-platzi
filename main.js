// Student
class Student {
	constructor ({
		name,
		email,
		userName,
		twitter = undefined,
		instagram = undefined,
		facebook = undefined,
		approvedCourses = [],
		learningPaths = [],
	}) {
		this._name = name;
		this._email = email;
		this._userName = userName;
		this.socialMedia = {
			twitter, 
			instagram,
			facebook,	
		}
		this.approvedCourses = approvedCourses; 
		this.learningPaths = learningPaths; 
	}

	get name (){
		return this._name;
	}

	set name(name){
		this._name = name;
	}

	get email (){
		return this._email;
	}
	
	set email(email){
		this._email= email;
	}

	get username (){
		return this._username;
	}
	
	set userName(userName){
		this._userName = userName;
	}

}

// Free Student
class FreeStudent extends Student{
	constructor (props){
		super(props);
	}


	approveCourse(newCourse){
		if(newCourse.isFree){
			this.approveCourse.push(newCourse);
		}
		else{
			console.warn("Lo sentimos, " + this._name + ", solo puedes tomar cursos abiertos");
		}
	}
}

// Basic Student
class BasicStudent extends Student{
	constructor (props){
		super(props);
	}

	approveCourse(newCourse){
		if(newCourse.lang !== "English"){
			this.approveCourse.push(newCourse);
		}
		else{
			console.warn("Lo sentimos, " + this._name + ", no puedes tomar cursos en inglés");
		}
	}
}

// Expert Student
class ExpertStudent extends Student{
	constructor (props){
		super(props);
	}

	approveCourse(newCourse){
		this.approveCourse.push(newCourse);
	}
}

// Courses
class Courses {
	constructor({
		name,
		modules = [],
		isFree = false,
		lang = "spanish",
	}){
		// Cuando colocamos un "_" en el nombre de nuestra variable, significa que es una variable "Privada".
		this._name = name;
		this.modules = modules;
		this.isFree = isFree;
		this.lang = lang;
	}

	get name(){
		return this._name;
	} 

	set name(name){
		(name === "Curso Malito de Programación Básico") 
		? console.error("Web... no") 
		: this._name = name;
	}

}

// Lessons
function videoPlay(id) {
	const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;

	console.log("Se está reproduciendo desde la url " + urlSecreta);
}

function videoStop(id) {
	const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;

	console.log("Se pauso la reproducción desde la url " + urlSecreta);
}

class Lessons {
	constructor({
		videoID,
		name,
		comments = [],
	}){
		this._videoID= videoID;
		this._name = name;
		this.comments = comments;
	}

	get videoID (){
		return this._videoID;
	}
	
	set videoID(videoID){
		this._videoID = videoID;
	}

	get name (){
		return this._name;
	}
	
	set name(name){
		this._name = name;
	}


	reproducir() {
		videoPlay(this.videoID);
	}

	pausar() {
		videoStop(this.videoID);
	}
}

// Comments
class Comments {
	constructor ({
		fotoDePerfil,
		userName,
		userPosition = "",
		fecha,
		likes,
		content,
	}){
		this.fotoDePerfil = fotoDePerfil;
		this._userName = userName;
		this.fecha = fecha;
		this.likes = likes;
		this.content = content;
	}

	get userName (){
		return this._userName;
	}
	
	set userName (userName){
		this._userName = userName;
	}

}

// Learnings Paths
class LearningPaths {
	constructor({
		name,
		description,
		courses = [],
	}){
		this._name = name;
		this.description = description;
		this.courses = courses;
	}

	get name (){
		return this._name;
	}
	
	set name(name){
		this._name = name;
	}
}

// Modules
class Modules{
	constructor({
		name,
		lessons,
	}){
		this._name = name;
		this.lessons = lessons;
	}	

	get name (){
		return this._name;
	}
	
	set name(name){
		this._name = name;
	}
}

// Escuela De Desarrollo Web

// Curso de Programacion Básica


// Modulo: Recap Curso Gratis de Programación Básica
const recapProgBasica = new Lessons ({
	videoID: "asdasdason312454yuiklifdc21331rh",
	name: "Recap Programación básica",
});
recapProgBasica.reproducir();
recapProgBasica.pausar();

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
	],
	isFree: true,
});

/*cursoProgBasica.name
me devuelve lo que esta en el atributo name
*/

/*cursoProgBasica.name = "agsfa";
cambia el valor del atributo name con el valor despues del signo igual */

const cursoDefHTMLYCSS= new Courses ({
	name:"Curso Definitivo de HTML y CSS",
});

const cursoPracticoHTMLYCSS= new Courses ({
	name:"Curso Práctico de HTML y CSS",
	lang: "english",
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
const joaquin = new FreeStudent({
	name: "Joaquin",
	username: "Joaquin",
	email: "joakoelkapo_gyt@hotmail.com",
	twitter: "joakoTejerina",
	learningPaths: [
		escuelaWeb,
		escuelaVgs,
	], 
});

const miguelito = new BasicStudent({
	name: "Miguel",
	username: "MiguelitoFeliz",
	email: "miguelP@platzi.com",
	instagram: "miguelito_Feliz",
	learningPaths: [
		escuelaWeb,
		escuelaData,
	],
});
