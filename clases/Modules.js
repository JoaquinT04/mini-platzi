export default class Modules{
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