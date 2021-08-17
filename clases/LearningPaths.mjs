export default class LearningPaths {
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