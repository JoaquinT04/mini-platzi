export default class Courses {
	constructor({
		name,
		modules = [],
	}){
		// Cuando colocamos un "_" en el nombre de nuestra variable, significa que es una variable "Privada".
		this._name = name;
		this.modules = modules;
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
