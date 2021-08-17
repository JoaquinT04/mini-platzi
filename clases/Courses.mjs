import Modules from "./Modules.mjs";
export default class Courses {
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
